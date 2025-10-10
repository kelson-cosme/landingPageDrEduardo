import { useEffect, useState, useRef } from "react";
import Logo from "../assets/logo.webp";
import Fundo from "../assets/imagens/gastroplatia/fundo.webp";
import Seta2 from "../assets/imagens/gastroplatia/array2.svg";
import Black from "../assets/imagens/Black.png";

import Avatar1 from "../assets/imagens/gastroplatia/av1.webp"
import Avatar2 from "../assets/imagens/gastroplatia/av2.webp"
import Avatar3 from "../assets/imagens/gastroplatia/av3.webp"
import Avatar4 from "../assets/imagens/gastroplatia/av4.webp"
import Avatar5 from "../assets/imagens/gastroplatia/av5.webp"
import { Intro } from "../components/Gastroplastia/Intro";
import { Advantages } from "../components/BalaoGastrico/Advantages";
// import { AboutSection } from "../components/Gastroplastia/AboutSection";
import { AboutSection } from "../components/AboutSection";
import { HowItWorks } from "../components/Gastroplastia/HowItWorks";
import { Beneficios } from "../components/Gastroplastia/Beneficios"
import { ComparativeTable } from "../components/Gastroplastia/ComparativeSection";
import { TestimonialCard } from "../components/TestimonialCard";
import { CtaButton } from "../components/CtaButton";
import { LocationSection } from "../components/LocationSection";
import { Footer } from "../components/Footer";
import { FaqSection } from "../components/FaqSection";

import Reducao from "../assets/imagens/gastroplatia/reducao.webp"

import Grafico from "../assets/imagens/gastroplatia/grafico.webp"


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router";

function Gastroplastia(){

  
        useEffect( () => {
            AOS.init();
        }, [])

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");

    const gradientMobile = "linear-gradient(270deg,rgba(0, 0, 0, 0.44) 0%, rgba(0, 0, 0, 0.31) 100%)"
    const gradient =  "linear-gradient(180deg,rgba(242, 245, 255, 1) 0%, rgba(249, 250, 255, 1) 100%)"
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

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



      const testimonials = [
        {
          avatar: Avatar1,
          name: "Ana Beatriz Lemos",
          time: "Há 2 semanas",
          text: "Escolhi a gastroplastia com o Dr. Eduardo porque não queria passar por cirurgia bariátrica. Melhor decisão! Procedimento rápido, alta no mesmo dia. Voltei a fazer caminhadas sem cansaço e minha autoestima voltou. Gratidão total!"
        },
        {
          avatar: Avatar2,
          name: "Marcos Vinícius Prado",
          time: "Há 1 mês",
          text: "Estava com 118kg, IMC alto, mas tinha receio da bariátrica. O Dr. Eduardo me explicou a gastroplastia endoscópica e foi perfeito pra mim. Já eliminei 21kg, minha pressão normalizou e o melhor: sem cortes, sem internação longa. Recomendo demais!",
        },
        {
          avatar: Avatar3,
          name: "Juliana Rocha Medeiros",
          time: "Há 3 semanas",
          text: "Fiquei impressionada com a rapidez do procedimento e a recuperação. Fiz a gastroplastia numa sexta, segunda já estava trabalhando normalmente. Perdi 19kg, aprendi a me alimentar melhor e ganhei qualidade de vida que não tinha há anos.",
        },
        {
          avatar: Avatar4,
          name: "Thiago Henrique Santana",
          time: "Há 2 meses",
          text: "Tudo muito bem explicado desde a primeira consulta. Realizei a gastroplastia, recuperação tranquila. Em 7 meses eliminei 23kg, saí do sedentarismo e voltei a ter disposição. Gratidão ao Dr. e a equipe!",
        },
        {
          avatar: Avatar5,
          name: "Camila Duarte Silveira",
          time: "Há 3 meses",
          text: "Gastroplastia e foi a solução ideal. Procedimento minimamente invasivo, me sinto segura. Já perdi 15kg e o acompanhamento nutricional fez toda diferença. Valeu muito a pena!",
        },
      ];



    return(
        <>
        <title>Gastroplastia Endoscópica em Cuiabá | Dr. Eduardo Amui</title>
  <meta name="description" content="A gastroplastia endoscópica é uma redução do estômago sem cirurgia. Saiba mais sobre o procedimento com o Dr. Eduardo Amui em Cuiabá." />

            <header 
                className={`fixed w-full top-0 z-50 transition-colors duration-300 ease-in-out 
                            ${hasScrolled || isMobileMenuOpen ? 'bg-[#372D2E] shadow-md' : 'bg-transparent'}`}
            >
            <nav className="max-w-[1920px] mx-auto w-full flex justify-between items-center p-4">
            <div>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-10 w-auto" />
            </Link>
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
                    <div className={`absolute top-full right-0 mt-6 w-64 bg-[#372D2E] rounded-md shadow-lg bg-[] text-white transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                     <a href="/balao-gastrico" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-[#3A425A] transition-colors duration-300">Balão Gástrico</a>
                    <a href="/plasma" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-[#3A425A] transition-colors duration-300">Plasma Argônio</a>
                    <a href="/gastroplastia" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-[#3A425A] transition-colors duration-300">Gastroplastia Endoscópica</a>
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
                <a href="/balao-gastrico" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}} className="block py-2 text-white">Balão Gástrico</a>
                <a href="/plasma" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}} className="block py-2 text-white">Plasma Argônio</a>
                <a href="/gastroplastia" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}} className="block py-2 text-white">Gastroplastia Endoscópica</a>
                </div>
                </li>
                <li className="py-2"><a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('contato')}>Contato</a></li>
            </ul>
            </div>
        </header>   





        <main className="mx-auto text-white overflow-hidden">
            <div data-aos="zoom-in" style={{backgroundImage:`url(${Fundo})`}} id="inicio"  className="h-[95vh] min-h-[600px] pt-20  bg-cover  bg-position-[center_right_-72vh] lg:bg-center bg-no-repeat flex flex-col justify-center">
                  <div className="h-[95vh] block lg:hidden absolute top-0 left-0 w-full z-1" style={{backgroundImage: gradientMobile}} >
                  </div>
                  
            <div className="max-w-[1920px] mx-auto w-full px-4 lg:pl-[10em] z-9">
                <h1 className="text-2xl md:text-5xl lg:text-4xl font-[700] uppercase">Gastroplastia Endoscópica,  < br className="hidden sm:block" /> redução do estômago sem cirurgia <br /> em Cuiabá | Dr. Eduardo Amui</h1>
                <p className="mb-5 text-1xl font-[100] mt-6"><span className="font-bold">Redução de estômago por endoscopia</span>, técnica <br className="hidden sm:block"  /> inovadora que permite emagrecimento sem cortes, <br className="hidden sm:block"  /> com recuperação rápida..</p>
                <div className="mt-5 flex items-center flex-wrap">
                  <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
                  <button className="cursor-pointer bg-background: #46B33C; pl-4 p-2 rounded-[2rem] flex items-center justify-center lg:text-[12px] font-[500] text-white z-9" style={{ backgroundImage: cardBackgroundGradient2 }}>
                  AGENDAR MINHA AVALIAÇÃO
                  <img src={Seta2} alt="Seta apontado para cima" className="w-8 ml-3" />
                  </button>                  
                  </Link>

                </div>
                <div className="mt-8 flex items-center">
                    <div className="w-1 h-12 bg-white mr-6"></div>
                    <div>
                        <p className="text-1xl lg:text-2xl font-bold">DR. EDUARDO AMUI | RQE Nº 5727</p>
                        <p className="text-lg text-[#999999]">Especialista em emagrecimento sem cortes</p>
                    </div>
                </div>
            </div>
            </div>
            
            
            {/* Faixa de Logos */}
            <div className="bg-white h-[5vh] flex items-center justify-around overflow-hidden whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center justify-center mx-7">
                <img className="w-4" src={Black} alt="logo com as iniciais do Dr. Eduardo Amui" />
                <h3 className="text-[#b7bac2] ml-5 font-[500] text-sm">DR. EDUARDO AMUI</h3>
                </div>
            ))}
            </div>

            <HowItWorks/>
            
            <div data-aos="zoom-in-down">
                <img width={"100%"} src={Reducao} alt="imagem do estômago reduzido, em 3d" />
            </div>

            <Intro/>
            <Advantages/>

            <section id="escolha" ref={sectionRefs.escolha} className="py-20 px-4 bg-white text-gray-800" style={{backgroundImage : gradient}}>
            <div className="max-w-[1200px] mx-auto">
                <div className="lg:flex justify-between  items-start mb-12">
                    <div className="text-left" >
                        <h2 data-aos="fade-right" className="mb-6 lg:mb-0 text-3xl md:text-4xl font-bold text-[#2E3650] lg:text-left text-center" >Como é feita a <br className="hidden lg:block" /> Gastroplastia Endoscópica?</h2>
                    </div>
                    <div className=" ">
                        <p data-aos="fade-left" className="text-[1em] lg:text-sm font-bold text-[#576BA1] lg:text-left text-center">TÉCNICA INOVADORA PARA REDUÇÃO <br className=""/> DO ESTOMAGO SEM CIRURGIA</p>
                    </div>
                </div>

                <div className="" data-aos="fade-up" data-aos-duration="3000">
                  <img className="w-full" src={Grafico} alt="" />
                </div>
            </div>
        </section>

        <Beneficios/>
        <ComparativeTable />


                  <section id="depoimentos" ref={sectionRefs.depoimentos} className="py-20 bg-[#262E46]" data-aos="fade-up"
     data-aos-duration="3000">
                  <div className="max-w-[1200px] mx-auto text-center text-white">
                    <p className="text-sm font-semibold text-gray-400 mb-2">DEPOIMENTOS</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">O que dizem nossos pacientes</h2>
                  </div>
        
                  <div className="marquee ">
                    {/* Primeiro grupo de cards */}
                    <div className="marquee-group text-justify ">
                      {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                          key={`primeiro-${index}`}
                          avatar={testimonial.avatar}
                          name={testimonial.name}
                          time={testimonial.time}
                          text={testimonial.text}
                        />
                      ))}
                    </div>
                    {/* Segundo grupo de cards (cópia exata para o loop) */}
                    <div aria-hidden="true" className="marquee-group">
                      {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                          key={`segundo-${index}`}
                          avatar={testimonial.avatar}
                          name={testimonial.name}
                          time={testimonial.time}
                          text={testimonial.text}
                        />
                      ))}
                    </div>
                  </div>
        
                  <div className="mt-12 text-center">
                    <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
                    <CtaButton className="cursor-pointer m-auto mt-8 self-start">
                      AGENDAR MINHA AVALIAÇÃO
                    </CtaButton>                        
                    </Link>
                  </div>
                </section>
        
        <AboutSection/>
        <LocationSection/>
        <FaqSection/>
        <Footer/>
        </main>     
    </>
    )
    
}

export default Gastroplastia;