// src/components/BalaoGastrico/Benefits.tsx

import B1 from "../../assets/imagens/balao/b1.svg"
import B2 from "../../assets/imagens/balao/b2.svg"
import B3 from "../../assets/imagens/balao/b3.svg"



export const Benefits = () => {
    return (
        <section id="beneficios" className=" px-4 text-white bg-white">
            <div className="bg-[#413E39] p-17 rounded-2xl max-w-6xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefícios do Balão Gástrico</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Benefício 1 */}
                    <div className="border border-gray-600 rounded-lg p-8 flex flex-col  hover:border-white transition-colors duration-300">
                        <img src={B1} alt="icone segurando um bisturi"  className="w-7"/>
                        <h3 className="font-bold mt-2">Controle da fome e da saciedade</h3>
                        <p className="text-gray-400 text-sm">
                            Sinta-se satisfeito com pequenas porções e recupere o controle sobre sua alimentação.
                        </p>
                    </div>
                    {/* Benefício 2 */}
                    <div className="border border-gray-600 rounded-lg p-8 flex flex-col  hover:border-white transition-colors duration-300">
                        <img src={B2} alt="icone"  className="w-7"/>
                        <h3 className="font-bold mt-2">Emagrecimento seguro e eficaz</h3>
                        <p className="text-gray-400 text-sm">
                            Perda de peso comprovada, sem cortes ou cirurgia, com suporte médico e nutricional.
                        </p>
                    </div>
                    {/* Benefício 3 */}
                    <div className="border border-gray-600 rounded-lg p-8 flex flex-col  hover:border-white transition-colors duration-300">
                        <img src={B3} alt="icone" className="w-7" />
                        <h3 className="font-bold mt-2">Mudança real no estilo de vida</h3>
                        <p className="text-gray-400 text-sm">
                            Mais disposição, autoestima renovada e motivação para manter hábitos saudáveis no longo prazo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};