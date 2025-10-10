// src/components/BalaoGastrico/Advantages.tsx

import { Link } from "react-router";
import Ad2 from "../../assets/imagens/balao/ad2.svg"
import Ad3 from "../../assets/imagens/balao/ad3.svg"
import Seta2 from "../../assets/imagens/gastroplatia/array2.svg"
import Balanca from "../../assets/imagens/balao/balanca.svg"
import Edite1 from "../../assets/imagens/balao/edite1.svg"
import Edite2 from "../../assets/imagens/balao/edite2.svg"



export const Advantages = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'

    return (
        <>
        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 lg:mb-16">Vantagens da Balão Gástrico</h2>
                <div className="grid md:grid-cols-3 gap-8" data-aos="flip-left">
                    {/* Vantagem 1 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Balanca} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Procedimento endoscópico, sem cortes</h3>
                        <p className="text-gray-600 text-sm">
                            Realizado por via oral, sem necessidade de incisões.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-up">
                        <img className="mb-2" src={Ad2} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Procedimento endoscópico, sem cortes</h3>
                        <p className="text-gray-600 text-sm">
                        Colocado por via oral, sem necessidade de incisões ou cicatrizes. Recuperação rápida e ambulatorial. Não exige internação e permite retorno às atividades em poucos dias.</p>
                    </div>
                    {/* Vantagem 3 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-left">
                        <img className="mb-2" src={Ad3} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Reversível</h3>
                        <p className="text-gray-600 text-sm">
                        O balão pode ser retirado a qualquer momento, sem comprometer o estômago.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="indicacoes" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 lg:mb-16">Vantagens da Balão Gástrico</h2>
                <div className="grid md:grid-cols-3 gap-8" data-aos="flip-left">
                    {/* Vantagem 1 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Edite2} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes com IMC a partir de 27</h3>
                        <p className="text-gray-600 text-sm">
                            Indicado para quem está em sobrepeso ou obesidade e não conseguiu resultado com dieta e exercícios.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-up">
                        <img className="mb-2" src={Edite1} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes com comorbidades associadas ao peso</h3>
                        <p className="text-gray-600 text-sm">
                        Como diabetes tipo 2, hipertensão, colesterol alto ou problemas ortopédicos.</p>
                    </div>
                    {/* Vantagem 3 */}
                    <div className="rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300" data-aos="flip-left">
                        <img className="mb-2" src={Ad2} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes que não podem ou não desejam cirurgia</h3>
                        <p className="text-gray-600 text-sm">
                        Alternativa segura e menos invasiva para quem tem contraindicação ou não quer realizar cirurgia bariátrica.
                        </p>
                    </div>
                </div>
            </div>

                <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20quero%20agendar%20uma%20consulta%20para%20conversar%20sobre%20o%C2%A0Bal%C3%A3o%C2%A0G%C3%A1strico"}>
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