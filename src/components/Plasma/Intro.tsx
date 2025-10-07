// src/components/BalaoGastrico/Intro.tsx
import BalaoImagem from "../../assets/imagens/plasma/argonio.webp";
import { CtaButton } from '../CtaButton';


export const Intro = () => {

    return (
        <section id="o-que-e" className="bg-white py-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Coluna de Texto */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Qual a finalidade do <br />Plasma de Argônio?</h2>
                    <p className="text-gray-600 mb-3">
                    O Plasma de Argônio é um tratamento endoscópico, minimamente invasivo, indicado para pacientes que voltaram a ganhar peso após a cirurgia bariátrica.                    </p>
                    <p className="text-gray-600 mb-3">
                    Durante o procedimento, o gás de argônio promove a cicatrização da anastomose (união entre estômago e intestino), reduzindo seu diâmetro.                    </p>
                    <p className="text-gray-600 mb-3">
                    Com isso, o paciente recupera a sensação de saciedade, retoma o controle alimentar e volta a perder peso sem precisar de nova cirurgia.
                    </p>


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