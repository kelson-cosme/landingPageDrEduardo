import Logo from "../assets/logo.webp"
import FundoCard1 from "../assets/fundoCard1.webp"
import Seta from "../assets/array.svg"
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


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from "react";
import { Link } from "react-router";


function BioInstagram() {
    // Gradiente principal do card
    const cardBackgroundGradient = 'linear-gradient(110deg, #44B93C 0%, #4EEA40 100%)';
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'
    const cardBackgroundGradient3 = 'linear-gradient(0deg,rgba(42, 50, 74, 1) 23%, rgba(65, 77, 114, 1) 65%)'

    useEffect( () => {
        AOS.init();
    }, [])

    return (
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

                        <div className="relative z-20 w-full h-full p-3 sm:p-10">
                            
                            <img src={Icon3} alt="icone gastroplatia" className="absolute top-3 w-4 sm:w-18 sm:top-6 left-[7px] sm:left-6 sm:p-4  " />
                            <img src={Eduardo3} className="absolute right-2 sm:right-12 bottom-0  w-[140px] sm:w-[299px]" alt="Foto do Dr. Eduardo" />
                            
                            <div className="h-full flex flex-col justify-center items-start">
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 leading-tight">
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
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 leading-tight text-justify">
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
                                <h1 className="text-white font-bold text-[13.5px] sm:text-[25px] mb-3 sm:mb-8 mt-7 sm:mt-15 leading-tight text-justify">
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

                <Link to="/#contato" className="w-full mb-3 sm:mb-11">
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


                                <button className="bg-white z-9 pl-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5 pr-1 rounded-[2rem] flex items-center text-[8px] sm:text-[23px] font-semibold text-white mt-11 sm:mt-19" style={{ backgroundImage: cardBackgroundGradient3 }}>
                                    VER LOCAL DE ATENDIMENTO
                                    <img className=" ml-2 sm:ml-5 w-5  sm:w-auto" src={Seta2} alt="Flexa"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>



            </div>
        </section>
    )
}

export default BioInstagram;