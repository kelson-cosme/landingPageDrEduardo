// src/components/BalaoGastrico/Advantages.tsx

import Ind1 from "../../assets/imagens/gastroplatia/Black.svg"
import Ind2 from "../../assets/imagens/gastroplatia/Black (1).svg"
import Ind3 from "../../assets/imagens/gastroplatia/Black (2).svg"



export const Advantages = () => {

    return (
        <>


        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-16">Indicações da Gastroplastia Endoscópica</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Vantagem 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ind1} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Indicada para quem possui IMC a partir de 30</h3>
                        <p className="text-gray-600 text-sm">
                            Ela é recomendada para todos os graus de obesidade, porém tem maior efetividade para obesidade grau 1.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ind2} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes que não querem ser submetidos a Cirurgia Bariátrica</h3>
                        <p className="text-gray-600 text-sm">
                            Ideal para quem não se enquadra nos critérios da cirurgia bariátrica ou prefere evitar procedimentos mais invasivos.
                        </p>
                    </div>
                    {/* Vantagem 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ind3} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Pacientes que não querem ter cortes no abdômen.</h3>
                        <p className="text-gray-600 text-sm">
                        Como é feita totalmente por endoscopia, não há incisões nem cicatrizes visíveis. Isso garante recuperação rápida e retorno mais ágil às atividades do dia a dia.</p>
                    </div>
                </div>
            </div>

        </section>
                
        </>

    );
};