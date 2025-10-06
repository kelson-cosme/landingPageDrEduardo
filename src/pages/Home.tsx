import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.webp";
import Fundo from "../assets/imagens/home/DR.webp";
import Seta2 from "../assets/imagens/gastroplatia/array2.svg";
import Review from "../assets/imagens/controle/review.svg";
import Black from "../assets/imagens/Black.png";
import DrEduardoSobre from "../assets/imagens/balao/dr Eduardo.webp"; // Imagem para a seção "Sobre"

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  
  const dropdownRef = useRef<HTMLLIElement>(null);
  const sectionRefs = {
    inicio: useRef<HTMLDivElement>(null),
    sobre: useRef<HTMLDivElement>(null),
    escolha: useRef<HTMLDivElement>(null), // Nova ref para a seção "Por que escolher"
    conteudos: useRef<HTMLDivElement>(null),
    servicos: useRef<HTMLDivElement>(null),
    contato: useRef<HTMLDivElement>(null),
  };

  const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (sectionName: string) => 
    `transition-colors duration-300 ${activeSection === sectionName ? 'text-[#907F62] font-semibold' : 'text-white hover:text-gray-300'}`;

  const getMobileLinkClass = (sectionName: string) => 
    `transition-colors duration-300 ${activeSection === sectionName ? 'text-[#907F62] font-semibold' : 'text-white'}`;

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ease-in-out 
                    ${hasScrolled || isMobileMenuOpen ? 'bg-[#262E46] shadow-md' : 'bg-transparent'}`}
      >
        <nav className="max-w-[1920px] mx-auto w-full flex justify-between items-center p-4">
          <div>
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li><a href="#inicio" className={getLinkClass('inicio')}>Início</a></li>
              <li><a href="#sobre" className={getLinkClass('sobre')}>Sobre mim</a></li>
              <li><a href="#conteudos" className={getLinkClass('conteudos')}>Conteúdos</a></li>
              <li className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={getLinkClass('servicos') + ' flex items-center'}>
                  Serviços
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full right-0 mt-2 w-64 rounded-md shadow-lg bg-[#2A324A] text-white transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                  <a href="#balao-gastrico" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-[#3A425A] transition-colors duration-300">Balão Gástrico</a>
                  <a href="#plasma-argonio" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-[#3A425A] transition-colors duration-300">Plasma Argônio</a>
                  <a href="#gastroplastia" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-[#3A425A] transition-colors duration-300">Gastroplastia Endoscópica</a>
                </div>
              </li>
              <li><a href="#contato" className={getLinkClass('contato')}>Contato</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menu">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
        <div className={`absolute left-0 w-full bg-[#262E46] md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
          <ul className="flex flex-col items-center py-4">
            <li className="py-2"><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('inicio')}>Início</a></li>
            <li className="py-2"><a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('sobre')}>Sobre mim</a></li>
            <li className="py-2"><a href="#conteudos" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('conteudos')}>Conteúdos</a></li>
            <li className="py-2 w-full text-center">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`${getMobileLinkClass('servicos')} flex items-center justify-center w-full`}>
                Serviços
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`bg-[#2A324A] overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                <a href="#balao-gastrico" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}} className="block py-2">Balão Gástrico</a>
                <a href="#plasma-argonio" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}} className="block py-2">Plasma Argônio</a>
                <a href="#gastroplastia" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}} className="block py-2">Gastroplastia Endoscópica</a>
              </div>
            </li>
            <li className="py-2"><a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('contato')}>Contato</a></li>
          </ul>
        </div>
      </header>

      <main className="mx-auto text-white">
        {/* Seção Hero */}
        <div style={{backgroundImage:`url(${Fundo})`}} id="inicio" ref={sectionRefs.inicio} className="h-screen min-h-[600px] pt-20 bg-cover bg-center bg-no-repeat flex flex-col justify-center">
          <div className="max-w-[1920px] mx-auto w-full px-4 lg:pl-[10em]">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-[700] ">DR. EDUARDO AMUI</h1>
            <p className="mb-5 font-[100] mt-2">Endoscopia, gastroplastia endoscópica e <br /> tratamentos para obesidade sem cortes</p>
            <h2 className="font-[700] lg:text-2xl text-[clamp(1.5rem,2.5vw,2rem)] leading-tight">Transformando vidas com <br /> métodos não invasivos <br /> para o controle do peso.</h2>
            <div className="mt-5 flex items-center flex-wrap">
              <button className="bg-background: #46B33C; pl-4 p-2 rounded-[2rem] flex items-center justify-center lg:text-[12px] font-[500] text-white z-9" style={{ backgroundImage: cardBackgroundGradient2 }}>
                QUERO AGENDAR MINHA AVALIAÇÃO
                <img src={Seta2} alt="Seta apontado para cima" className="w-8 ml-3" />
              </button>
              <img className="ml-5 w-40 mt-4 sm:mt-0" src={Review} alt="5 estrela na nota do google" />
            </div>
          </div>
        </div>
        
        {/* Faixa de Logos */}
        <div className="bg-white h-[8vh] flex items-center justify-around overflow-hidden whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center mx-7">
              <img className="w-4" src={Black} alt="logo com as iniciais do Dr. Eduardo Amui" />
              <h3 className="text-[#b7bac2] ml-5 font-[500] text-sm">DR. EDUARDO AMUI</h3>
            </div>
          ))}
        </div>

        {/* Seção Sobre Mim */}
        <section id="sobre" ref={sectionRefs.sobre} className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
                <p className="text-center text-2xl md:text-3xl font-light mb-12">
                    "Não se trata apenas de emagrecer, mas de <br/> recuperar o controle, a saúde e o prazer de viver."
                </p>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={DrEduardoSobre} alt="Foto do Dr. Eduardo Amui" className="rounded-lg w-full max-w-md mx-auto" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Conheça o Dr. Eduardo Amui</h2>
                        <h3 className="text-xl text-[#907F62] font-semibold mb-6">Especialista em emagrecimento sem cirurgia.</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>Desde a formatura em 2013, segui fascinado por oferecer procedimentos pouco invasivos aos pacientes. Escolhi a especialidade de endoscopia, onde adquiri muita experiência tratando de complicações de cirurgias bariátricas por endoscopia.</p>
                            <p>Foi quando surgiu a dúvida: Por que não tratar a obesidade com procedimentos por endoscopia, ao invés de tratar as complicações de cirurgias bariátricas?</p>
                            <p>Seguindo este propósito, decidi focar e me dedicar somente ao tratamento da obesidade com emagrecimento sem cortes por endoscopia, aliado ao acompanhamento multidisciplinar, promovendo a mudança de vida de muitas pessoas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                {/* NOVA SEÇÃO: Por que pacientes escolhem */}
                <section id="escolha" ref={sectionRefs.escolha} className="py-20 px-4 bg-white text-gray-800">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div className="text-left">
                        <p className="text-sm font-semibold text-gray-500 mb-2">SOBRE MIM</p>
                        <h2 className="text-3xl md:text-4xl font-bold">Por que pacientes escolhem<br/> o Dr. Eduardo Amui?</h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-semibold text-[#262E46]">SUA SAÚDE NAS MÃOS DE UM<br/>PROFISSIONAL COMPROMETIDO</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="border border-gray-200 p-8 rounded-lg flex items-start space-x-6">
                        <div className="flex-shrink-0">
                           <svg className="w-8 h-8 text-[#262E46]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.977l-.51.342a11.985 11.985 0 01-4.43-4.43l.342-.51a6 6 0 00.977-3.86l-.477-2.387a2 2 0 00-.547-1.022l-1.405-1.405a2 2 0 00-2.828 0L3 5.172a2 2 0 000 2.828l1.405 1.405a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.977l.51-.342a11.985 11.985 0 014.43 4.43l-.342.51a6 6 0 00-.977 3.86l.477 2.387a2 2 0 00.547 1.022l1.405 1.405a2 2 0 002.828 0l2.828-2.828a2 2 0 000-2.828l-1.405-1.405z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
                            <p className="text-gray-500 text-sm">Equipamentos avançados e técnicas modernas de endoscopia permitem procedimentos precisos, seguros e com mínima invasividade, como o balão gástrico e a gastroplastia endoscópica.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-200 p-8 rounded-lg flex items-start space-x-6">
                        <div className="flex-shrink-0">
                           <svg className="w-8 h-8 text-[#262E46]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Recuperação Acelerada</h3>
                            <p className="text-gray-500 text-sm">Os tratamentos realizados pelo Dr. Eduardo são menos invasivos, proporcionando alta rápida, menor desconforto e retorno mais breve às atividades do dia a dia.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-200 p-8 rounded-lg flex items-start space-x-6">
                        <div className="flex-shrink-0">
                           <svg className="w-8 h-8 text-[#262E46]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Atendimento Humanizado</h3>
                            <p className="text-gray-500 text-sm">Com sólida experiência em endoscopia digestiva, o Dr. Eduardo Amui oferece um atendimento personalizado, seguro e acolhedor para quem busca emagrecer com saúde e qualidade de vida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Placeholders para futuras seções */}
        <div id="conteudos" ref={sectionRefs.conteudos} className="h-screen pt-20"><h1 className="text-4xl font-bold text-center">Conteúdos</h1></div>
        <div id="servicos" ref={sectionRefs.servicos} className="h-screen pt-20"><h1 className="text-4xl font-bold text-center">Serviços</h1></div>
        <div id="contato" ref={sectionRefs.contato} className="h-screen pt-20"><h1 className="text-4xl font-bold text-center">Contato</h1></div>
      </main>
    </>
  );
}

export default Home;