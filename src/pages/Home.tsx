import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.webp";
import Fundo from "../assets/imagens/home/DR.webp";
import Seta2 from "../assets/imagens/gastroplatia/array2.svg";
import Review from "../assets/imagens/controle/review.svg";
import Black from "../assets/imagens/Black.png";
import { TestimonialCard } from "../components/TestimonialCard";
import { ServicesSection } from "../components/ServicesSection"; // Importe a nova seção
import { LocationSection } from "../components/LocationSection"; // 1. IMPORTE AQUI
import { ContentSection } from "../components/ContentSection"; // 1. IMPORTE AQUI
import { FaqSection } from "../components/FaqSection"; // 1. IMPORTE AQUI
import { Footer } from "../components/Footer"; // 1. IMPORTE AQUI
import { AboutSection } from "../components/AboutSection"; // 1. IMPORTE AQUI

import Tecnologia1 from "../assets/imagens/tecnologia1.svg"
import Tecnologia2 from "../assets/imagens/tecnologia2.svg"
import Tecnologia3 from "../assets/imagens/tecnologia3.svg"

import Avatar1 from "../assets/imagens/avatar1.webp"
import Avatar2 from "../assets/imagens/avatar2.webp"
import Avatar3 from "../assets/imagens/avatar3.webp"
import Avatar4 from "../assets/imagens/avatar4.webp"
import Avatar5 from "../assets/imagens/avatar5.webp"

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");


    // Dados dos depoimentos
    const testimonials = [
      {
        avatar: Avatar1,
        name: "Ana Beatriz Lemos",
        time: "Há 2 semanas",
        text: (
          <>
            Coloquei o balão gástrico com o Dr. Eduardo e só posso dizer que foi a melhor decisão da minha vida! Atendimento impecável, seguro e cheio de empatia. Me senti cuidada em cada detalhe. 💙💬
              
          </>
        ),
      },
      {
        avatar: Avatar2,
        name: "Marcos Vinícius Prado",
        time: "Há 1 mês",
        text: "Excelente profissional! Competente, atencioso e muito humano. Me senti acolhido desde o primeiro contato. Recomendo demais!",
      },
      {
        avatar: Avatar3,
        name: "Juliana Rocha Medeiros",
        time: "Há 3 semanas",
        text: "Fiz tratamento com plasma de argônio com o Dr. Eduardo e o resultado foi surpreendente. Profissional calmo, explica tudo com clareza e ainda transmite muita confiança.❤️",
      },
      {
        avatar: Avatar4,
        name: "Thiago Henrique Santana",
        time: "Há 2 meses",
        text: "Fui indicado para um acompanhamento endoscópico e fiquei impressionado com a atenção e o cuidado do Dr. Eduardo. Tudo muito bem feito, desde o atendimento até o pós. Recomendo de verdade.",
      },
      {
        avatar: Avatar5,
        name: "Camila Duarte Silveira",
        time: "Há 3 meses",
        text: "Estava com muito receio de colocar o balão, mas o Dr. Eduardo me passou toda a segurança. Já eliminei vários quilos e me sinto muito melhor! Atendimento humano e profissional! 🥹",
      },
    ];
  
  const dropdownRef = useRef<HTMLLIElement>(null);
  const sectionRefs = {
    inicio: useRef<HTMLDivElement>(null),
    sobre: useRef<HTMLDivElement>(null),
    escolha: useRef<HTMLDivElement>(null), // Nova ref para a seção "Por que escolher"
    depoimentos: useRef<HTMLDivElement>(null), // Ref para a nova seção
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
        <div id="sobre" ref={sectionRefs.sobre}>
          <AboutSection />
        </div>

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
                           <img src={Tecnologia1} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
                            <p className="text-gray-500 text-sm">Equipamentos avançados e técnicas modernas de endoscopia permitem procedimentos precisos, seguros e com mínima invasividade, como o balão gástrico e a gastroplastia endoscópica.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-200 p-8 rounded-lg flex items-start space-x-6">
                        <div className="flex-shrink-0">
                        <img src={Tecnologia2} alt="" />

                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Recuperação Acelerada</h3>
                            <p className="text-gray-500 text-sm">Os tratamentos realizados pelo 
                            Dr. Eduardo são menos invasivos, proporcionando alta rápida, menor desconforto e retorno mais breve às atividades do dia a dia.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-200 p-8 rounded-lg flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <img src={Tecnologia3} alt="" />

                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Atendimento Humanizado</h3>
                            <p className="text-gray-500 text-sm">Com sólida experiência em endoscopia digestiva, o Dr. Eduardo Amui oferece um atendimento personalizado, seguro e acolhedor para quem busca emagrecer com saúde e qualidade de vida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



                {/* NOVA SEÇÃO: Depoimentos */}
                <section id="depoimentos" ref={sectionRefs.depoimentos} className="py-20 bg-[#262E46]">
                  <div className="max-w-[1200px] mx-auto text-center text-white">
                      <p className="text-sm font-semibold text-gray-400 mb-2">DEPOIMENTOS</p>
                      <h2 className="text-3xl md:text-4xl font-bold mb-12">O que dizem nossos pacientes</h2>
                  </div>

                  {/* Container do carrossel infinito */}
                  <div className="marquee">
                      <div className="marquee-content">
                          {/* Renderiza a lista de cards duas vezes em um único array */}
                          {[...testimonials, ...testimonials].map((testimonial, index) => (
                              <TestimonialCard 
                                  key={index}
                                  avatar={testimonial.avatar}
                                  name={testimonial.name}
                                  time={testimonial.time}
                                  text={testimonial.text}
                              />
                          ))}
                      </div>
                  </div>

                  <div className="mt-12 text-center">
                      <button className="bg-background: #46B33C; pl-6 p-3 rounded-[2rem] flex items-center justify-center lg:text-base font-[500] text-white z-9 mx-auto" style={{ backgroundImage: cardBackgroundGradient2 }}>
                          QUERO AGENDAR MINHA AVALIAÇÃO
                          <img src={Seta2} alt="Seta apontado para cima" className="w-10 ml-4" />
                      </button>
                  </div>
              </section>


        

        <div id="servicos" ref={sectionRefs.servicos} className="h-auto">
          <ServicesSection />
        </div>


        <div id="contato" ref={sectionRefs.contato} className="h-auto">
          <LocationSection />
        </div>


        <div id="conteudos" ref={sectionRefs.conteudos} className="h-auto">
            <ContentSection />
        </div>


        <FaqSection />

      </main>
      <Footer />

    </>
  );
}

export default Home;