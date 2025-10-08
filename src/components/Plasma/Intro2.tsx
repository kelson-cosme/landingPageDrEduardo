// src/components/BalaoGastrico/Intro.tsx
import BalaoImagem from "../../assets/imagens/plasma/fundo3.webp";
import { CtaButton } from '../CtaButton';


export const Intro2 = () => {

    return (
        <section id="o-que-e" className="bg-[#F9FAFF] py-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
                        <CtaButton className=" mt-8 self-start">
                        AGENDAR MINHA AVALIAÇÃO
                        </CtaButton>          
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