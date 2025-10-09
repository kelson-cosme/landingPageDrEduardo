// src/components/BalaoGastrico/NoSurgery.tsx
import { Link } from "react-router";
import IlustracaoBalao from "../../assets/imagens/balao/procedimento.webp"; // Adicione a imagem da ilustração aqui
import Seta2 from "../../assets/imagens/gastroplatia/array2.svg"

// Ícone da seta


export const NoSurgery = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

    return (
        <section id="sem-cirurgia" className="bg-white  pb-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
                {/* Coluna de Texto */}
                <div className="text-left">
                    <h3 className="text-3xl md:text-4xl font-bold  text-center lg:text-left text-[#2E3650]" data-aos="fade-up-right">Balão Gástrico:</h3>
                    <h2 className="text-3xl text-center lg:text-left md:text-4xl font-bold text-[#2E3750] mb-2" data-aos="fade-up-right">emagrecimento sem cirurgia</h2>
                    <p className="text-gray-600 mb-6 font-bold text-justify" data-aos="fade-up-left"> 
                        Um procedimento endoscópico, seguro e temporário, que promove saciedade precoce e auxilia na reeducação alimentar.
                    </p>

                    <div className="flex items-center justify-center" data-aos="flip-down">
                    <img src={IlustracaoBalao} alt="Ilustração do Balão Gástrico" className="rounded-lg w-3/4 max-w-lg block lg:hidden mb-5"   />
                </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8" data-aos="zoom-out-right">
                        <li className="leading-tight">Sem cortes: colocado por endoscopia, com sedação leve.</li>
                        <li className="leading-tight">Recuperação rápida: alta no mesmo dia e retorno às atividades em poucos dias.</li>
                        <li className="leading-tight">Resultados reais: perda de peso comprovada e melhora da saúde.</li>
                    </ul>

                    <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
                    <button
                        className="cursor-pointer px-6 py-3 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 group "
                        style={{ backgroundImage: cardBackgroundGradient2 }}
                    >
                        AGENDAR MINHA AVALIAÇÃO
                        <div className="bg-white/20 rounded-full  ml-4 group-hover:translate-x-1 transition-transform duration-300 ">
                            <img src={Seta2} alt="" />
                        </div>
                    </button>                    
                    </Link>

                </div>

                {/* Coluna de Imagem */}
                <div className="flex items-center justify-center" ata-aos="flip-down">
                    <img src={IlustracaoBalao} alt="Ilustração do Balão Gástrico" className="rounded-lg w-3/4 max-w-lg hidden lg:block"  />
                </div>
            </div>
        </section>
    );
};