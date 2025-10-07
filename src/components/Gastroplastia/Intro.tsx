// src/components/BalaoGastrico/Intro.tsx
import BalaoImagem from "../../assets/imagens/gastroplatia/remix.webp";
import { CtaButton } from '../CtaButton';


export const Intro = () => {

    return (
        <section id="o-que-e" className="bg-[#F9FAFF] py-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Coluna de Texto */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E3650]">O que é a <br />Gastroplastia Endoscópica?</h2>
                    <p className="text-[#2D2D2D] mb-3 text-justify">
                        A gastroplastia endoscópica é um procedimento para emagrecimento feito sem cortes e sem cicatrizes. Com a ajuda de um aparelho introduzido pela boca, o médico dá pontos internos no estômago, deixando-o menor e em formato parecido com um tubo.
                    </p>
                    <p className="text-[#2D2D2D] mb-3 text-justify">
                        Isso faz com que a pessoa coma menos e sinta saciedade por mais tempo, favorecendo a perda de peso de forma segura e com rápida recuperação</p>
                


                    <div className=" text-center">
                        <CtaButton className=" mt-8 self-start">
                        AGENDAR MINHA AVALIAÇÃO
                        </CtaButton>          
                    </div>
                </div>

                {/* Coluna de Imagem */}
                <div className="flex items-center justify-center">
                    <img src={BalaoImagem} alt="Ilustração do Balão Gástrico no estômago" className="rounded-lg shadow-xl w-full max-w-md" />
                </div>
            </div>
        </section>
    );
};