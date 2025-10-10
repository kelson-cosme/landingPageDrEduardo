// src/components/BalaoGastrico/Advantages.tsx

import { Link } from "react-router";
import Seta2 from "../../assets/imagens/gastroplatia/array2.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";



import Balanca from "../../assets/imagens/gastroplatia/balanca.svg"
import Bisturi from "../../assets/imagens/gastroplatia/bisturi.svg"
import Mais from "../../assets/imagens/gastroplatia/mais.svg"

export const Beneficios = () => {
        useEffect( () => {
            AOS.init();
        }, [])

    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)'

    return (
        <>

        <section id="vantagens" className="bg-[#F0F2FF] py-20 px-4 border ">
            <div className="max-w-6xl mx-auto text-center">
                <h2 data-aos="zoom-out-down" className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-16">Benefícios da Gastroplastia Endoscópica</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Vantagem 1 */}
                    <div data-aos="flip-left" className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Balanca} alt="Icone de uma balança" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Emagrecimento</h3>
                        <p className="text-gray-600 text-sm">
                            Espera-se uma perda média de cerca de 20% do peso inicial, podendo chegar a 30% em um ano, dependendo do caso.
                        </p>
                    </div>
                    {/* Vantagem 2 */}
                    <div data-aos="flip-up" className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Bisturi} alt="Icone de uma mão segurando um bisturi" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Procedimento Minimamente Invasivo</h3>
                        <p className="text-gray-600 text-sm">
                            Procedimento realizado por endoscopia, com anestesia geral e recuperação rápida.
                        </p>
                    </div>
                    {/* Vantagem 3 */}
                    <div data-aos="flip-left" className=" rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300">
                        <img className="mb-2" src={Mais} alt="Icone significando Reversível" />
                        <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight">Método definitivo e seguro</h3>
                        <p className="text-gray-600 text-sm">
                            Reduz em até 70% a capacidade do estômago, promovendo saciedade prolongada e perda de peso.
                        </p>
                    </div>
                </div>
            </div>

            <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20gostaria%20de%20saber%20mais%20sobre%20Gastroplastia%20Endosc%C3%B3pica"}>

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