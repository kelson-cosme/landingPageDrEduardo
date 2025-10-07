// src/components/BalaoGastrico/NoSurgery.tsx
import IlustracaoBalao from "../../assets/imagens/balao/procedimento.webp"; // Adicione a imagem da ilustração aqui

// Ícone da seta
const Seta2 = () => (
    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const NoSurgery = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

    return (
        <section id="sem-cirurgia" className="bg-white  pb-20 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Coluna de Texto */}
                <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Balão Gástrico:</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2E3750] mb-2">emagrecimento sem cirurgia</h2>
                    <p className="text-gray-600 mb-6 font-bold">
                        Um procedimento endoscópico, seguro e temporário, que promove saciedade precoce e auxilia na reeducação alimentar.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                        <li>Sem cortes: colocado por endoscopia, com sedação leve.</li>
                        <li>Recuperação rápida: alta no mesmo dia e retorno às atividades em poucos dias.</li>
                        <li>Resultados reais: perda de peso comprovada e melhora da saúde.</li>
                    </ul>
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
                    <img src={IlustracaoBalao} alt="Ilustração do Balão Gástrico" className="rounded-lg w-full max-w-lg" />
                </div>
            </div>
        </section>
    );
};