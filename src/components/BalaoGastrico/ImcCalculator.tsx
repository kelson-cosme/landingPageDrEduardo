// src/components/BalaoGastrico/ImcCalculator.tsx
import { useState } from 'react';
import { CtaButton } from '../CtaButton'; // Importando o novo componente
import { Link } from 'react-router';

export const ImcCalculator = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState<number | null>(null);

    const handleCalculate = () => {
        const alturaMetros = parseFloat(altura.replace(',', '.'));
        const pesoKg = parseFloat(peso.replace(',', '.'));

        if (alturaMetros > 0 && pesoKg > 0) {
            const imcValue = pesoKg / (alturaMetros * alturaMetros);
            setImc(imcValue);
        } else {
            setImc(null);
        }
    };
    
    return (
        <section id="imc-calculator" className="bg-[#413E39] py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Coluna da Calculadora */}
                <div className="flex flex-col gap-6" data-aos="fade-right">
                    <h2 className="text-2xl font-bold leading-tight text-center lg:text-left" data-aos="fade-down">DESCUBRA SE O BALÃO GÁSTRICO É IDEAL PARA VOCÊ EMAGRECER COM SEGURANÇA, SEM CIRURGIA.</h2>
                    
                                {/* Coluna da Tabela */}
                                <div className=" lg:p-8 rounded-lg lg:border-1 lg:hidden block">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <table className="w-full text-gray-800">
                            <thead>
                                <tr className="bg-[#907F62] text-white">
                                    <th className="p-4 font-normal text-left w-2/3"></th>
                                    <th className="p-4 text-4xl font-bold text-center">IMC</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white b">
                                <tr className="border-t  border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Peso Baixo</td>
                                    <td className="p-4 font-semibold text-center">&lt; 19.9</td>
                                </tr>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Peso Normal</td>
                                    <td className="p-4 font-semibold text-center">20 a 25</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Sobrepeso</td>
                                    <td className="p-4 font-semibold text-center">25,1 a 29,9</td>
                                </tr>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Obesidade Grau I</td>
                                    <td className="p-4 font-semibold text-center">30 a 34,9</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Obesidade Grau II</td>
                                    <td className="p-4 font-semibold text-center">35 a 39,9</td>
                                </tr>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Obesidade Grau III (Mórbida)</td>
                                    <td className="p-4 font-semibold text-center">&gt; 40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                     <p className="text-sm text-white mt-6 text-justify">
                     IMC é a sigla para Índice de Massa Corporal que serve para avaliar o peso do indivíduo em relação à sua altura e assim indicar se está dentro do peso ideal, acima ou abaixo do peso desejado.                  
                      </p>
                </div>


                    <div>
                        <label htmlFor="peso" className="text-sm text-gray-400">Seu peso (em kg)</label>
                        <input type="text" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 mt-1"/>
                    </div>
                    
                    <div>
                        <label htmlFor="altura" className="text-sm text-gray-400">Sua altura (em m)</label>
                        <input type="text" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Ex: 1,75" className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 mt-1 placeholder-gray-500"/>
                    </div>

                    <button onClick={handleCalculate} className="bg-[#907F62] text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-[#a19073] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 0v6m0-6l-6 6m10 3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Calcular
                    </button>

                    {imc !== null && (
                        <div className="mt-4 text-left">
                            <p className="mb-4">Seu IMC é: <span className="font-bold text-xl">{imc.toFixed(2)}</span></p>
                            {imc > 28 && (
                                <>
                                    <p className="mb-4">Se o resultado do seu IMC foi acima de 28 e você:</p>
                                    <div className="border border-gray-600 rounded-md p-4 text-center mb-4">
                                        Já tentou emagrecer sem sucesso
                                    </div>
                                    <div className="border border-gray-600 rounded-md p-4 text-center mb-6">
                                        Nunca passou por cirurgia no estômago
                                    </div>
                                    <p className="font-bold">O BALÃO GÁSTRICO PODE SER UMA OPÇÃO SEGURA E SEM CORTES.</p>
                                </>
                            )}
                        </div>
                    )}

                    <Link target='_blank' to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20quero%20agendar%20uma%20consulta%20para%20conversar%20sobre%20o%C2%A0Bal%C3%A3o%C2%A0G%C3%A1strico"}>
                   <CtaButton className="cursor-pointer m-auto lg mt-6 self-start">
                        AGENDAR MINHA AVALIAÇÃO
                    </CtaButton>                    
                    </Link>

                </div>

                {/* Coluna da Tabela */}
                <div className=" lg:p-8 rounded-lg lg:border-1 lg:block hidden" data-aos="fade-left">  
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <table className="w-full text-gray-800">
                            <thead>
                                <tr className="bg-[#907F62] text-white">
                                    <th className="p-4 font-normal text-left w-2/3"></th>
                                    <th className="p-4 text-4xl font-bold text-center">IMC</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white b">
                                <tr className="border-t  border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Peso Baixo</td>
                                    <td className="p-4 font-semibold text-center">&lt; 19.9</td>
                                </tr>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Peso Normal</td>
                                    <td className="p-4 font-semibold text-center">20 a 25</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Sobrepeso</td>
                                    <td className="p-4 font-semibold text-center">25,1 a 29,9</td>
                                </tr>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Obesidade Grau I</td>
                                    <td className="p-4 font-semibold text-center">30 a 34,9</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Obesidade Grau II</td>
                                    <td className="p-4 font-semibold text-center">35 a 39,9</td>
                                </tr>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="p-4 border-r-2 border-r-gray-200">Obesidade Grau III (Mórbida)</td>
                                    <td className="p-4 font-semibold text-center">&gt; 40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                     <p className="text-sm text-white mt-6 text-justify">
                     IMC é a sigla para Índice de Massa Corporal que serve para avaliar o peso do indivíduo em relação à sua altura e assim indicar se está dentro do peso ideal, acima ou abaixo do peso desejado.                  
                      </p>
                </div>
            </div>
        </section>
    );
};