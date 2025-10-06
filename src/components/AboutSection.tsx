// src/components/AboutSection.tsx

import { useState } from 'react';
import Card from "../assets/imagens/card.webp"
// Dados das credenciais
const credentials = [
    {
        title: 'Residência Médica em Endoscopia',
        institution: 'FAMERP – São José do Rio Preto | 2018–2020',
    },
    {
        title: 'Residência em Cirurgia do Trauma',
        institution: 'FAMERP – São José do Rio Preto | 2017–2018',
    },
    {
        title: 'Residência em Cirurgia Geral',
        institution: 'Hospital Santa Rosa | 2015–2017',
    },
    {
        title: 'Graduação em Medicina',
        institution: 'Universidade Anhembi Morumbi | 2008–2013',
    }
];

const highlights = [
    'Membro da SOBED – Sociedade Brasileira de Endoscopia.',
    'Especializado em tratamentos endoscópicos da obesidade.',
    'Especializado em tratamentos do reganho de peso e complicações de cirurgia bariátrica.',
];

export const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="sobre" className="py-20 px-4 text-white bg-[#262E46]">
            <div className="max-w-[1200px] mx-auto">
                <p className="text-center text-2xl md:text-3xl font-light mb-12">
                    "Não se trata apenas de emagrecer, mas de <br/> recuperar o controle, a saúde e o prazer de viver."
                </p>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={Card} alt="Foto do Dr. Eduardo Amui" className="rounded-lg w-full max-w-[20em] mx-auto" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold mb-4">Conheça o Dr. Eduardo Amui</h2>
                        <h3 className="text-xl  font-semibold ">Especialista em emagrecimento sem cirurgia.</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>Pioneiro em Cuiabá na gastroplastia endoscópica. Técnica moderna e aprovada internacionalmente de redução do estômago sem cortes.</p>
                            <p>Desde a formatura em 2013, seguia fascinado por oferecer tratamentos pouco invasivos aos pacientes. Escolhi a especialidade de endoscopia, onde adquiri muita experiência tratando de complicações de cirurgias bariátricas por endoscopia.</p>
                            <p>Foi quando surgiu a dúvida: Por que não tratar a obesidade com procedimentos por endoscopia, ao invés de tratar as complicações de cirurgias bariátricas?.</p>
                            <p>Seguindo este propósito, decidi focar e me dedicar somente ao tratamento da obesidade com emagrecimento sem cortes por endoscopia, aliado ao acompanhamento multidisciplinar e promovendo a mudança de vida de muitas pessoas.</p>
                        </div>

                        {/* Botão para expandir as credenciais */}
                        <div className="mt-8">
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)} 
                                className="w-full bg-[#3A425A] p-4 rounded-lg flex justify-center items-center text-white font-semibold transition-colors hover:bg-[#4a5578]"
                            >
                                <svg className={`w-5 h-5 mr-3 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                                Credenciais em destaque
                            </button>

                            {/* Conteúdo Expansível */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#3A425A] rounded-b-lg ${isExpanded ? 'max-h-[500px] p-6' : 'max-h-0 p-0'}`}>
                                <div className="border-t border-gray-600 pt-6">
                                    {credentials.map((cred, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="font-bold">{cred.title}</p>
                                            <p className="text-sm text-gray-400">{cred.institution}</p>
                                        </div>
                                    ))}
                                    <ul className="list-disc list-inside space-y-2 mt-6 text-sm text-gray-300">
                                        {highlights.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};