import Logo from "../assets/logo.webp"
import FundoCard1 from "../assets/fundoCard1.webp"
import Seta from "../assets/array.svg"
import Seta3 from "../assets/arrayRed.svg"

import Zap1 from "../assets/zap1.webp"
import Eduardo from "../assets/dr.webp"
import Zap2 from "../assets/zap2.webp"

import Eduardo2 from "../assets/imagens/gastroplatia/DrEduardo2.webp"
import Fundo2 from "../assets/imagens/gastroplatia/RETANGULO.webp"
import Seta2 from "../assets/imagens/gastroplatia/array2.svg"
import Icon from "../assets/imagens/gastroplatia/icon.png"

import Eduardo3 from "../assets/imagens/balao/dr Eduardo.webp"
import Fundo3 from "../assets/imagens/balao/reatangulo2.webp"
import Icon3 from "../assets/imagens/balao/icon.png"

import Fundo4 from "../assets/imagens/plasma/fundo.webp"
import Eduardo4 from "../assets/imagens/plasma/dr. Eduardp.webp"

import Fundo5 from "../assets/imagens/controle/fundo.webp"
import Eduardo5 from "../assets/imagens/controle/dr Eduardo.webp"
import Icon4 from "../assets/imagens/controle/ICON.png"
import Reveiw from "../assets/imagens/controle/review.svg"


import Fundo6 from "../assets/imagens/localizacao/fundo.webp"
import Icon5 from "../assets/imagens/localizacao/icon.png"
import Eduardo6 from "../assets/imagens/localizacao/dr Eduardo.webp"
import Pino from "../assets/imagens/localizacao/pino.webp"
import FundoInsta from "../assets/imagens/fundoInsta.webp"
import textoInsta from "../assets/imagens/textoInsta.webp"

import EduardoInsta from "../assets/imagens/eduardoinsta.webp"
import LogoInsta from "../assets/imagens/logoInsta.webp"

import FundoYoutube from "../assets/imagens/fundoyoutube.webp"
import LogoYoutube from "../assets/imagens/logoYoutube.webp"
import EduardoYoutube from "../assets/imagens/eduardoYoutube.webp"
import LogoYoutube2 from "../assets/imagens/logoyoutube2.webp"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from "react";
import { Link } from "react-router";

function BioInstagram() {

    const WhatsAppIcon = () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.052 24l1.687-6.163c-1.041-1.804-1.598-3.825-1.598-5.918 0-5.418 4.381-9.8 9.8-9.8s9.8 4.382 9.8 9.8-4.381 9.8-9.8 9.8c-2.004 0-3.933-.578-5.588-1.631L.052 24zM8.381 4.542c4.102 0 7.424 3.322 7.424 7.424s-3.322 7.424-7.424 7.424-7.424-3.322-7.424-7.424c0-2.019.811-3.865 2.13-5.23l.119-.148-1.378 4.253 4.41-1.353.133-.082c1.325-.826 2.928-1.31 4.63-1.31l-.014.002z" />
        </svg>
    );
    
    const InstagramIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    );
    
    const FacebookIcon = () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
    );
    

    // Gradiente principal do card
    const cardBackgroundGradient = 'linear-gradient(110deg, #44B93C 0%, #4EEA40 100%)';
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'
    const cardBackgroundGradient3 = 'linear-gradient(0deg,rgba(42, 50, 74, 1) 23%, rgba(65, 77, 114, 1) 65%)'

    useEffect( () => {
        AOS.init();
    }, [])

    return (


        <>
                <section className="container m-auto p-5 overflow-hidden">
            <img className="m-auto mb-8 w-[12em]" src={Logo} alt="Duas letras simbolizando a logo do Dr. Eduardo Amui, as letras EA" />

            <div className="m-auto flex flex-col items-center sm:max-w-[849px] ">
                <Link to="https://api.whatsapp.com/send/?phone=5565999558558&text&type=phone_number&app_absent=0" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-right" className="card relative isolate w-full h-[165px] sm:h-[339px]  rounded-[10px] sm:rounded-[20px]" 
                        style={{ backgroundImage: cardBackgroundGradient }}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${FundoCard1})` }}
                        ></div>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div>

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={Zap1} alt="logo do whatsapp" className="absolute top-3 w-5 sm:w-15 sm:top-6 left-3 sm:left-6 bg-[#519742] p-1.5 sm:p-4 rounded-full border border-white/50 " />
                            <img src={Eduardo} className="absolute right-2 sm:right-12 bottom-0  w-[137px] sm:w-fit" alt="Foto do Dr. Eduardo" />
                            <img src={Zap2} alt="logo do whatsapp 3d" className="absolute right-[-1.04vh] top-5 w-10 sm:w-24 animate-float"  />
                            <img src={Zap2} alt="Imagem da logo do aplicativo whatsapp (telefone)" className="absolute right-32  sm:right-76 w-7 bottom-[-0.538rem] z-50 sm:w-19 animate-float" width={89}/>
                            
                            <div className="h-full flex flex-col justify-center items-start">
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 z-9 leading-tight">
                                    O PRIMEIRO PASSO PARA <br /> TRANSFORMAR SUA SAÚDE <br /> COMEÇA COM UMA CONVERSA.
                                </h1>

                                <button className="bg-white z-9 pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-[#2E3750]">
                                    AGENDE SUA CONSULTA
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>



                <Link to="/gastroplastia" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-left" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${Fundo2})` }}
                        ></div>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div>

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={Icon} alt="icone gastroplatia" className="absolute top-3 w-4 sm:w-18 sm:top-6 left-[7px] sm:left-6 sm:p-4  " />
                            <img src={Eduardo2} className="absolute right-2 sm:right-12 bottom-0  w-[183px] sm:w-fit" alt="Foto do Dr. Eduardo" />
                            
                            <div className="h-full flex flex-col justify-center items-start ">
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] z-9 mb-3 sm:mb-8 mt-7 sm:mt-15 text-justify leading-tight" >
                                    GASTROPLASTIA <br /> ENDOSCÓPICA, REDUÇÃO DO <br /> ESTÔMAGO SEM CIRURGIA EM <br /> CUIABÁ | DR. EDUARDO AMUI
                                </h1>

                                <button className="bg-background: #46B33C; pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-white z-9" style={{ backgroundImage: cardBackgroundGradient2 }}>
                                    CONHEÇA O PROCEDIMENTO
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta2} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>



                <Link to="/balao-gastrico" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-right" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" 
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${Fundo3})`, backgroundSize: "cover" }}
                        ></div>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div>

                        <div className="relative z- w-full h-full p-3 sm:p-10">
                            
                            <img src={Icon3} alt="icone gastroplatia" className="absolute top-3 w-4 sm:w-18 sm:top-6 left-[7px] sm:left-6 sm:p-4  " />
                            <img src={Eduardo3} className="absolute right-2 sm:right-12 bottom-0  w-[140px] sm:w-[299px]" alt="Foto do Dr. Eduardo" />
                            
                            <div className="h-full flex flex-col justify-center items-start">
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 leading-tight z-9">
                                    EMAGRECIMENTO <span className="bg-[#E40000]">SEM CORTES</span> <br /> COM O BALÃO GÁSTRICO</h1>

                                <button className="bg-background: #46B33C; pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-white z-9" style={{ backgroundImage: cardBackgroundGradient2 }}>
                                    CONHEÇA O PROCEDIMENTO
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta2} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>

                
                <Link to="/plasma" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-left" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${Fundo4})`, backgroundSize: "cover" }}
                        ></div>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div>

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={Icon} alt="icone gastroplatia" className="absolute top-3 w-4 sm:w-18 sm:top-6 left-[7px] sm:left-6 sm:p-4  " />
                            <img src={Eduardo4} className="absolute right-2 sm:right-12 bottom-0  w-[125px] sm:w-[269px]" alt="Foto do Dr. Eduardo" />
                            
                            <div className="h-full flex flex-col justify-center items-start">
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 leading-tight text-justify z-9">
                                    PLASMA DE ARGÔNIO: <br /> TRATAMENTO PARA REGANHO DE <br /> PESO PÓS-BARIÁTRICA EM CUIABÁ
                                    </h1>

                                <button className="bg-background: #46B33C; pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-white z-9" style={{ backgroundImage: cardBackgroundGradient2 }}>
                                    CONHEÇA O PROCEDIMENTO
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta2} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-right" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${Fundo5})`, backgroundSize: "cover" }}
                        ></div>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div>

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={Icon4} alt="icone gastroplatia" className="absolute top-3 w-4 sm:w-18 sm:top-6 left-[7px] sm:left-6 sm:p-4  " />
                            <img src={Eduardo5} className="absolute right-2 sm:right-12 bottom-0  w-[170px] sm:w-[350px]" alt="Foto do Dr. Eduardo" />
                            <img src={Reveiw} alt="Avaliação 5 estrelas no google" className="absolute right-3 bottom-3 w-20 sm:w-50"/>

                            <div className="h-full flex flex-col justify-center items-start">
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 leading-tight text-justify z-9">
                                    TRANSFORMANDO VIDAS COM <br /> MÉTODOS NÃO INVASIVOS <br /> PARA O CONTROLE DO PESO.                            
                                </h1>

                                <button className="bg-white z-9 pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-[#2E3750]">
                                    CONHEÇA O DOUTOR
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link  to="https://www.google.com/search?sca_esv=301c2d72a545a3fe&rlz=1C1JJTC_pt-BRBR1105BR1105&sxsrf=AE3TifMt-WYDbbiPzz_K82b2uuozm7juBA:1751295790560&kgmid=/g/11krdq21w4&q=Dr.+Eduardo+Amui+-+Bal%C3%A3o+g%C3%A1strico+%7C+Reganho+de+peso+p%C3%B3s-bari%C3%A1trica+%7C+Plasma+de+Arg%C3%B4nio+%7C+Cuiab%C3%A1+%E2%80%93MT.&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=2cb93fd5b64539cb" target="_blank" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-left" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${Fundo6})`, backgroundSize: "cover" }}
                        ></div>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div>

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={Icon5} alt="icone gastroplatia" className="absolute top-3 w-4 sm:w-18 sm:top-6 left-[7px] sm:left-6 sm:p-4  " />
                            <img src={Eduardo6} className="absolute right-2 sm:right-19 bottom-0  w-[120px] sm:w-[250px] z-99" alt="Foto do Dr. Eduardo " />
                            <img src={Pino} alt="Pino de localização" className="animate-float absolute sm:w-[166px] w-[50px] sm:right-[-15px] right-[-7px] rotate-10 blur-[1.5px] z-9"  />

                            <img src={Pino} alt="Pino de localização" className="animate-float absolute sm:w-[116px] w-[50px]  sm:right-[230px] bottom-[80px] sm:bottom-[160px] right-[80px] rotate-10 blur-[3.5px] "  />


                            <img src={Pino} alt="Pino de localização" className="animate-float absolute sm:w-[116px] w-[50px] sm:right-[260px] bottom-[-5px] right-[100px] rotate-350 blur-[1.7px] z-99"  />



                            <div className="h-full flex flex-col justify-center items-start">


                                <button className="bg-white z-99 pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-white mt-11 sm:mt-19" style={{ backgroundImage: cardBackgroundGradient3 }}>
                                    VER LOCAL DE ATENDIMENTO
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta2} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>



                <Link  to="https://www.instagram.com/dr.eduardoamui" target="_blank" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-right" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${FundoInsta})`, backgroundSize: "cover" }}
                        ></div>



                        {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-[10px] sm:rounded-[20px]"></div> */}

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={EduardoInsta} className="absolute right-2 sm:right-13 bottom-0  w-[143px] sm:w-[299px] z-99" alt="Foto do Dr. Eduardo " />
                            <img src={LogoInsta} alt="Pino de localização" className="animate-float absolute sm:w-[140px] w-[50px] sm:right-[-15px] right-[-7px] rotate-10  z-9"  />

                            <img src={LogoInsta} alt="Pino de localização" className="animate-float absolute sm:w-[116px] w-[50px]  sm:right-[230px] bottom-[80px] sm:bottom-[160px] right-[95px] rotate-10 blur-[3.5px] "  />


                            <img src={LogoInsta} alt="Pino de localização" className="animate-float absolute sm:w-[116px] w-[50px] sm:right-[260px] bottom-[-5px] right-[100px] rotate-350 blur-[1.7px] z-99"  />



                            <div className="h-full flex flex-col justify-center items-start">


                            <div>
                                <img src={textoInsta} alt="foto do Dr. Eduardo" className="z-99 w-[10rem] lg:w-[20rem]"/>
                            </div>

                            </div>
                        </div>
                    </div>
                </Link>


                <Link  to="https://www.youtube.com/@eduardoamui" target="_blank" className="w-full mb-3 sm:mb-11">
                    <div data-aos="fade-left" className="card relative isolate w-full h-[165px] sm:h-[339px] rounded-[10px] sm:rounded-[20px]" >
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-100 rounded-[10px] sm:rounded-[20px]" 
                            style={{ backgroundImage: `url(${FundoYoutube})`, backgroundSize: "cover" }}
                        ></div>

        

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={EduardoYoutube} className="absolute right-2 sm:right-13 bottom-0  w-[143px] sm:w-[299px] z-99" alt="Foto do Dr. Eduardo " />
                            <img src={LogoYoutube2} alt="Pino de localização" className="animate-float absolute sm:w-[166px] w-[50px] sm:right-[-15px] right-[-7px] rotate-10  z-9"  />

                            <img src={LogoYoutube2} alt="Pino de localização" className="animate-float absolute sm:w-[116px] w-[50px]  sm:right-[230px] bottom-[80px] sm:bottom-[160px] right-[95px] rotate-10 blur-[3.5px] "  />


                            <img src={LogoYoutube2} alt="Pino de localização" className="animate-float absolute sm:w-[116px] w-[50px] sm:right-[260px] bottom-[-5px] right-[100px] rotate-350 blur-[1.7px] z-99"  />



                            <div className="h-full flex flex-col  justify-center items-center  w-[50%]">

                                <img src={LogoYoutube} className="w-[10rem] sm:w-[15rem]" alt="Logo do Youtube" />

                                <button className="bg-white z-99 pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-[#B90012] mt-4 sm:mt-9" >
                                    ACESSE AGORA MESMO
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta3} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>



            </div>
        </section>

        <footer className="bg-white text-[#262E44] pt-16">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Seção Principal do Rodapé */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Coluna 1: Mapa */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.731551229712!2d-56.10383798888062!3d-15.59990598522378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1a0d7716963%3A0x7e0a4051a3f4e2!2sAv.%20das%20Flores%2C%20945%20-%2018%20Andar%20-%20Jardim%20Cuiaba%2C%20Cuiab%C3%A1%20-%20MT%2C%2078043-172%2C%20Brazil!5e0!3m2!1sen!2sus!4v1730878536102!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border:0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>

                    {/* Coluna 2: Logo e Descrição */}
                    <div>
                        <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-10 mb-4"/>
                        <p className="text-sm text-gray-400 mb-4">
                            Endoscopista, Gastroplastia Endoscópica e Tratamentos para Obesidade
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300"><WhatsAppIcon /></a>
                            <a href="#" className="hover:text-gray-300"><InstagramIcon /></a>
                            <a href="#" className="hover:text-gray-300"><FacebookIcon /></a>
                        </div>
                    </div>

                    {/* Coluna 3: Navegação */}
                    <div>
                        <h4 className="font-bold mb-4">Navegação:</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tratamentos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Localização</a></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato */}
                    <div>
                        <h4 className="font-bold mb-4">Contato:</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Seg - Sex | 08h às 19h</li>
                            <li>(65) 9 9955-8558</li>
                        </ul>
                    </div>
                </div>

                {/* Seção Secundária (Direitos Autorais) */}
                <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2025 Dr. Eduardo Amui. Todos os direitos reservados.</p>
                    <p className="my-2 md:my-0">Política de privacidade</p>
                    <p>
                        <Link target='_blank' to={"https://vivoxmarketing.com.br/"}>
                            Desenvolvido por <span className='underline font-bold'>Invictus Web.</span>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>        
        </>
    )
}

export default BioInstagram;