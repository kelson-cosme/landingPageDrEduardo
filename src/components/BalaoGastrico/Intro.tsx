// src/components/BalaoGastrico/Intro.tsx
import BalaoImagem from "../../assets/imagens/balao/balaogastrico.webp";

const Seta2 = () => (
    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const Intro = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

    return (
        <section id="o-que-e" className="bg-white py-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Coluna de Texto */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">O que é o Balão Gástrico?</h2>
                    <p className="text-gray-600 mb-4">
                        O balão gástrico é um tratamento endoscópico para sobrepeso e obesidade. Um balão de silicone é colocado no estômago e preenchido com soro, reduzindo o espaço disponível.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Isso gera saciedade precoce, ajuda a controlar a quantidade de comida ingerida e favorece a perda de peso, sempre aliado à reeducação alimentar.
                    </p>
                    <button
                        className="px-6 py-3 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 group"
                        style={{ backgroundImage: cardBackgroundGradient2 }}
                    >
                        AGENDAR MINHA AVALIAÇÃO
                        <div className="bg-white/20 rounded-full p-2 ml-4 group-hover:translate-x-1 transition-transform duration-300">
                            <Seta2 />
                        </div>
                    </button>
                </div>

                {/* Coluna de Imagem */}
                <div className="flex items-center justify-center">
                    <img src={BalaoImagem} alt="Ilustração do Balão Gástrico no estômago" className="rounded-lg shadow-xl w-full max-w-md" />
                </div>
            </div>
        </section>
    );
};