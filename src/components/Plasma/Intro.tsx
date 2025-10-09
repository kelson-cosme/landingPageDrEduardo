// src/components/BalaoGastrico/Intro.tsx
import { Link } from "react-router";
import BalaoImagem from "../../assets/imagens/plasma/argonio.webp";
import { CtaButton } from '../CtaButton';


export const Intro = () => {

    return (
        <section id="o-que-e" className="bg-[#F9FAFF] py-20 px-4 text-gray-800">
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
                        <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
                        <CtaButton className="cursor-pointer mt-8 self-start">
                        AGENDAR MINHA AVALIAÇÃO
                        </CtaButton>                        
                        </Link>
          
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