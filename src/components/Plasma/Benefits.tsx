// src/components/BalaoGastrico/Benefits.tsx

import B1 from "../../assets/imagens/balao/b1.svg"
import B2 from "../../assets/imagens/balao/b2.svg"
import B3 from "../../assets/imagens/balao/b3.svg"



export const Benefits = () => {
    const sectionBgColor = 'linear-gradient(180deg,rgba(61, 71, 103, 1) 0%, rgba(52, 61, 89, 1) 100%)';

    return (
        <section id="beneficios" className=" px-4 text-whit bg-[#F9FAFF] pb-15" >
            <div className="p-17 rounded-2xl max-w-6xl mx-auto " style={{backgroundImage: sectionBgColor}}>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefícios do Balão Gástrico</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Benefício 1 */}
                    <div className="border border-gray-600 rounded-lg p-8 flex flex-col  hover:border-white transition-colors duration-300">
                        <img src={B1} alt="icone segurando um bisturi"  className="w-7"/>
                        <h3 className="font-bold mt-2">Recuperar a saciedade</h3>
                        <p className="text-gray-400 text-sm">
                        Voltar a sentir satisfação com pequenas porções de alimento.
                        </p>
                    </div>
                    {/* Benefício 2 */}
                    <div className="border border-gray-600 rounded-lg p-8 flex flex-col  hover:border-white transition-colors duration-300">
                        <img src={B2} alt="icone"  className="w-7"/>
                        <h3 className="font-bold mt-2">Retomar o emagrecimento</h3>
                        <p className="text-gray-400 text-sm">
                        Eliminar o peso recuperado sem precisar de nova cirurgia.
                        </p>
                    </div>
                    {/* Benefício 3 */}
                    <div className="border border-gray-600 rounded-lg p-8 flex flex-col  hover:border-white transition-colors duration-300">
                        <img src={B3} alt="icone" className="w-7" />
                        <h3 className="font-bold mt-2 leading-tight">Melhorar autoestima e qualidade de vida</h3>
                        <p className="text-gray-400 text-sm">
                            Sentir-se novamente no controle do corpo e da saúde
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};