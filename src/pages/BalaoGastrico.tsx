
import Fundo from "../assets/imagens/balao/capaBalao.webp";
import Seta2 from "../assets/imagens/gastroplatia/array2.svg";
import Review from "../assets/imagens/controle/review.svg";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.webp";


function BalaoGastrico(){

    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';


      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [hasScrolled, setHasScrolled] = useState(false);
      const [activeSection, setActiveSection] = useState("inicio");

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
    

    return(
        <>
        {/* Seção Hero */}

        <header 
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ease-in-out 
                    ${hasScrolled || isMobileMenuOpen ? 'bg-[#413E39] shadow-md' : 'bg-transparent'}`}
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
                <div className={`absolute top-full right-0 mt-2 w-64 rounded-md shadow-lg bg-[] text-white transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
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
        <div className={`absolute left-0 w-full bg-[#413E39] md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
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
              <div className={`bg-[#413E39] overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
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
        <div style={{backgroundImage:`url(${Fundo})`}} id="inicio"  className="h-screen min-h-[600px] pt-20 bg-cover bg-center bg-no-repeat flex flex-col justify-center">
          <div className="max-w-[1920px] mx-auto w-full px-4 lg:pl-[10em]">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-[700] ">DR. EDUARDO AMUI</h1>
            <p className="mb-5 font-[100] mt-2">Método moderno, não invasivo e seguro <br /> para quem busca resultados reais com <br /> acompanhamento médico especializado.</p>
            <h2 className="font-[700] lg:text-2xl text-[clamp(1.5rem,2.5vw,2rem)] leading-tight">Transformando vidas com <br /> métodos não invasivos <br /> para o controle do peso.</h2>
            <div className="mt-5 flex items-center flex-wrap">
              <button className="bg-background: #46B33C; pl-4 p-2 rounded-[2rem] flex items-center justify-center lg:text-[12px] font-[500] text-white z-9" style={{ backgroundImage: cardBackgroundGradient2 }}>
              AGENDAR MINHA AVALIAÇÃO
              <img src={Seta2} alt="Seta apontado para cima" className="w-8 ml-3" />
              </button>
            </div>
          </div>
        </div>
        </main>
     </>
    )
}

export default BalaoGastrico