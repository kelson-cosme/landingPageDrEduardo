// src/components/BalaoGastrico/Advantages.tsx

import Ad2 from "../../assets/imagens/balao/ad2.svg"
import Ad3 from "../../assets/imagens/balao/ad3.svg"
import Seta2 from "../../assets/imagens/gastroplatia/array2.svg"


export const Beneficios = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'

    return (
        <>

        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 data-aos="zoom-out-down" className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-16">Benefícios da Gastroplastia Endoscópica</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Vantagem 1 */}
                    <div data-aos="flip-left" className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ad2} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Emagrecimento</h3>
                        <p className="text-gray-600 text-sm">
                            Espera-se uma perda média de cerca de 20% do peso inicial, podendo chegar a 30% em um ano, dependendo do caso.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div data-aos="flip-up" className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ad2} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Procedimento Minimamente Invasivo</h3>
                        <p className="text-gray-600 text-sm">
                            Procedimento realizado por endoscopia, com anestesia geral e recuperação rápida.
                        </p>
                    </div>
                    {/* Vantagem 3 */}
                    <div data-aos="flip-left" className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Ad3} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Método definitivo e seguro</h3>
                        <p className="text-gray-600 text-sm">
                            Reduz em até 70% a capacidade do estômago, promovendo saciedade prolongada e perda de peso.
                        </p>
                    </div>
                </div>
            </div>

                 <button
                        className="m-auto mt-9 px-6 py-3 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 group"
                        style={{ backgroundImage: cardBackgroundGradient2 }}
                    >
                        AGENDAR MINHA AVALIAÇÃO
                        <div className="bg-white/20 rounded-full  ml-4 group-hover:translate-x-1 transition-transform duration-300">
                            <img src={Seta2} alt="" />
                        </div>
                    </button>
        </section>
                
        </>

    );
};