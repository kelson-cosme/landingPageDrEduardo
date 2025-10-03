import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.webp";

import Fundo from "../assets/imagens/home/DR.webp"

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  
  const dropdownRef = useRef<HTMLLIElement>(null);
  const sectionRefs = {
    inicio: useRef<HTMLDivElement>(null),
    sobre: useRef<HTMLDivElement>(null),
    conteudos: useRef<HTMLDivElement>(null),
    servicos: useRef<HTMLDivElement>(null),
    contato: useRef<HTMLDivElement>(null),
  };

  // Efeito para detectar a rolagem e mudar o fundo do header
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para fechar o dropdown de serviços ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Efeito para o Intersection Observer que define a seção ativa
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

  // Função para criar as classes dinâmicas dos links com a nova cor
  const getLinkClass = (sectionName: string) => 
    `transition-colors duration-300 ${activeSection === sectionName ? 'text-[#907F62] font-semibold' : 'text-white hover:text-gray-300'}`;

  const getMobileLinkClass = (sectionName: string) => 
    `transition-colors duration-300 ${activeSection === sectionName ? 'text-[#907F62] font-semibold' : 'text-white'}`;


  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-colors duration-300 ease-in-out 
                    ${hasScrolled || isMobileMenuOpen ? 'bg-[#262E46] shadow-md' : 'bg-transparent'}`}
      >
        <nav className="max-w-[1920px] mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-10 w-auto" />
            </a>
          </div>

          {/* Navigation Links para Desktop */}
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

          {/* Botão Hambúrguer para Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menu">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu Mobile */}
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

      <main className="max-w-[1920px] mx-auto p-4 text-white">
        <div style={{backgroundImage:`url(${Fundo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition: "center"}} id="inicio" ref={sectionRefs.inicio} className="h-[600px] pt-20"><h1 className="text-4xl font-bold mb-4">Início</h1></div>
        <div id="sobre" ref={sectionRefs.sobre} className="h-screen pt-20"><h1 className="text-4xl font-bold">Sobre mim</h1></div>
        <div id="conteudos" ref={sectionRefs.conteudos} className="h-screen pt-20"><h1 className="text-4xl font-bold">Conteúdos</h1></div>
        <div id="servicos" ref={sectionRefs.servicos} className="h-screen pt-20"><h1 className="text-4xl font-bold">Serviços</h1></div>
        <div id="contato" ref={sectionRefs.contato} className="h-screen pt-20"><h1 className="text-4xl font-bold">Contato</h1></div>
      </main>
    </>
  );
}

export default Home;