// src/components/BalaoGastrico/Advantages.tsx

import { Link } from "react-router";
import Ad1 from "../../assets/imagens/balao/ad1.svg"
import Ad2 from "../../assets/imagens/balao/ad2.svg"
import Seta2 from "../../assets/imagens/gastroplatia/array2.svg"
import Escudo from "../../assets/imagens/plasma/escudo.svg"

import Indicacao1 from "../../assets/imagens/plasma/Black (5).svg"
import Indicacao2 from "../../assets/imagens/plasma/Black (6).svg"
import Indicacao3 from "../../assets/imagens/plasma/Black (7).svg"

export const Advantages = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'

    return (
        <>
        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border border-t-[#9EB8FF] border-b-[#9EB8FF]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-16">Vantagens da Plasma de Argônio</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Vantagem 1 */}
                    <div className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-left">
                        <img className="mb-2" src={Ad1} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Procedimento endoscópico, sem cortes</h3>
                        <p className="text-gray-600 text-sm">
                            Realizado por via oral, sem necessidade de incisões.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-up">
                        <img className="mb-2" src={Ad2} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Recuperação rápida e ambulatorial</h3>
                        <p className="text-gray-600 text-sm">
                        Não exige internação e permite retorno rápido às atividades.</p>
                    </div>
                    {/* Vantagem 3 */}
                    <div className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-right">
                        <img className="mb-2" src={Escudo} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Baixo risco e alta segurança</h3>
                        <p className="text-gray-600 text-sm">
                            Menos complicações em comparação à cirurgia revisional.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-16">Indicações do Plasma Argônio</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Vantagem 1 */}
                    <div className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-left">
                        <img className="mb-2" src={Indicacao1} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes com Bypass Gástrico</h3>
                        <p className="text-gray-600 text-sm">
                            Indicado apenas para quem fez bariátrica por técnicas como fobi-capella (com ou sem anel) e bypass tradicional.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-up">
                        <img className="mb-2" src={Indicacao2} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Reganho de peso após 1-2 anos</h3>
                        <p className="text-gray-600 text-sm">
                            Quando o paciente volta a engordar após o período inicial de perda.
                        </p>
                    </div>
                    {/* Vantagem 3 */}
                    <div className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-right">
                        <img className="mb-2" src={Indicacao3} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Reganho ≥10% do menor peso</h3>
                        <p className="text-gray-600 text-sm">
                         Para quem recuperou parte significativa do peso eliminado com a cirurgia.
                        </p>
                    </div>
                </div>
            </div>

            <Link target="blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20quero%20agendar%20uma%20consulta%20para%20avaliar%20se%20o%20Plasma%20de%20Arg%C3%B4nio%20%C3%A9%20indicado%20para%C2%A0o%C2%A0meu%C2%A0caso"}>
                 <button
                        className="cursor-pointer m-auto mt-9 px-6 py-3 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 group"
                        style={{ backgroundImage: cardBackgroundGradient2 }}
                    >
                        AGENDAR MINHA AVALIAÇÃO
                        <div className="bg-white/20 rounded-full  ml-4 group-hover:translate-x-1 transition-transform duration-300">
                            <img src={Seta2} alt="" />
                        </div>
                    </button>
            </Link>

        </section>
                
        </>

    );
};