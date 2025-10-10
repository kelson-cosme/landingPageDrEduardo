// src/components/BalaoGastrico/Intro.tsx
import { Link } from "react-router";
import BalaoImagem from "../../assets/imagens/plasma/argonio.webp";
import { CtaButton } from '../CtaButton';


export const Intro = () => {

    return (
        <section id="o-que-e" className="bg-[#F9FAFF] py-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Coluna de Texto */}
                <div className="text-left" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Qual a finalidade do <br />Plasma de Argônio?</h2>
                    <p className="text-gray-600 mb-3">
                    O Plasma de Argônio é um tratamento endoscópico, minimamente invasivo, indicado para pacientes que voltaram a ganhar peso após a cirurgia bariátrica.                    </p>
                    <p className="text-gray-600 mb-3">
                    Durante o procedimento, o Plasma de Argônio cauterizará a região da anastomose (união entre estômago e intestino), para estimular cicatrização de reduzir o seu diâmetro.</p>
                    <p className="text-gray-600 mb-3">
                    Com isso, o paciente recupera a sensação de saciedade, retoma o controle alimentar e volta a perder peso sem precisar de nova cirurgia.
                    </p>


                    <div className=" text-center" >
                        <Link target="_blank" to={"figma.com/exit?url=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5565999558558%26text%3DOl%25C3%25A1%252C%2520vim%2520pela%2520p%25C3%25A1gina%2520do%2520Dr.%2520Eduardo%2520Amui%2520e%2520quero%2520agendar%2520uma%2520consulta%2520para%2520avaliar%2520se%2520o%2520Plasma%2520de%2520Arg%25C3%25B4nio%2520%25C3%25A9%2520indicado%2520para%25C2%25A0o%25C2%25A0meu%25C2%25A0caso"}>
                        <CtaButton className="cursor-pointer mt-8 self-start">
                        AGENDAR MINHA AVALIAÇÃO
                        </CtaButton>                        
                        </Link>
          
                    </div>
                </div>

                {/* Coluna de Imagem */}
                <div className="flex items-center justify-center" data-aos="fade-down">
                    <img src={BalaoImagem} alt="Ilustração do Balão Gástrico no estômago" className="rounded-lg shadow-xl w-full max-w-md" />
                </div>
            </div>
        </section>
    );
};