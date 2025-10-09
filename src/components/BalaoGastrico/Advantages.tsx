// src/components/BalaoGastrico/Advantages.tsx

import { Link } from "react-router";
import Ad2 from "../../assets/imagens/balao/ad2.svg"
import Ad3 from "../../assets/imagens/balao/ad3.svg"
import Seta2 from "../../assets/imagens/gastroplatia/array2.svg"


export const Advantages = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'

    return (
        <>
        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 lg:mb-16">Indicações da Gastroplastia Endoscópica</h2>
                <div className="grid md:grid-cols-3 gap-8" data-aos="flip-left">
                    {/* Vantagem 1 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ad2} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Indicada para quem possui IMC a partir de 30</h3>
                        <p className="text-gray-600 text-sm">
                            Ela é recomendada para todos os graus de obesidade, porém tem maior efetividade para obesidade grau 1.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-up">
                        <img className="mb-2" src={Ad2} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes que não querem ser submetidos a Cirurgia Bariátrica</h3>
                        <p className="text-gray-600 text-sm">
                            Ideal para quem não se enquadra nos critérios da cirurgia bariátrica ou prefere evitar procedimentos mais invasivos.</p>
                    </div>
                    {/* Vantagem 3 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-left">
                        <img className="mb-2" src={Ad3} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes que não querem ter cortes no abdômen.</h3>
                        <p className="text-gray-600 text-sm">
                        Como é feita totalmente por endoscopia, não há incisões nem cicatrizes visíveis. Isso garante recuperação rápida e retorno mais ágil às atividades do dia a dia.
                        </p>
                    </div>
                </div>
            </div>

                <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
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