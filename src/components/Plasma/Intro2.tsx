// src/components/BalaoGastrico/Intro.tsx
import { Link } from "react-router";
import BalaoImagem from "../../assets/imagens/plasma/fundo3.webp";
import { CtaButton } from '../CtaButton';


export const Intro2 = () => {

    return (
        <section id="o-que-e" className="bg-[#F9FAFF] py-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" data-aos="zoom-in-left">
                {/* Coluna de Texto */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E3650] lg:text-left text-center">Solução eficaz para o reganho de peso pós-bariátrica</h2>
                    
                    {/* Coluna de Imagem */}
                    <div className=" items-center justify-center flex lg:hidden mb-7 lg:mb-0">
                        <img src={BalaoImagem} alt="Ilustração do Balão Gástrico no estômago" className="rounded-lg drop-shadow-lg w-full max-w-md" />
                    </div>
                    
                    <p className="text-[#2D2D2D] mb-3 font-bold text-justify lg:text-left">
                        Está enfrentando reganho de peso após a cirurgia bariátrica?                    
                    </p>

                    <p className="text-[#2D2D2D] mb-3 lg:text-left text-justify">
                    Está enfrentando reganho de peso após a cirurgia bariátrica? O tratamento com Plasma de Argônio é uma técnica moderna e segura que pode te ajudar a retomar sua jornada de emagrecimento sem a necessidade de uma nova cirurgia!</p>
       


                    <div className=" text-center">
                        <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20quero%20agendar%20uma%20consulta%20para%20avaliar%20se%20o%20Plasma%20de%20Arg%C3%B4nio%20%C3%A9%20indicado%20para%C2%A0o%C2%A0meu%C2%A0caso"}>
                            <CtaButton className="cursor-pointer mt-8 self-start">
                                AGENDAR MINHA AVALIAÇÃO
                            </CtaButton>
                        </Link>
                                  
                    </div>
                </div>

                {/* Coluna de Imagem */}
                <div className=" items-center justify-center hidden lg:flex">
                    <img src={BalaoImagem} alt="Ilustração do Balão Gástrico no estômago" className="rounded-lg drop-shadow-lg w-full max-w-md" />
                </div>
            </div>
        </section>
    );
};