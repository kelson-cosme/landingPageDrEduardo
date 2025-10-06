// src/components/ServicesSection.tsx

import { useState } from 'react';
import ImagemBalao from '../assets/imagens/balao/dr Eduardo.png'; // Adicione as imagens corretas
import ImagemGastro from '../assets/imagens/gastroplatia/DrEduardo2.png';
import ImagemPlasma from '../assets/imagens/plasma/dr. Eduardp.png';
import Seta from '../assets/imagens/gastroplatia/array2.svg';

// Dados para cada serviço
const servicesData = {
  gastroplastia: {
    title: 'O que é Gastroplastia Endoscópica?',
    description: 'A gastroplastia endoscópica é um procedimento minimamente invasivo que reduz o tamanho do estômago por dentro, sem cortes, auxiliando na perda de peso e reeducação alimentar.',
    indications: 'Indicado para pacientes com IMC acima de 30, que buscam uma alternativa segura e eficaz à cirurgia bariátrica tradicional.',
    benefits: 'Recuperação rápida, menor risco de complicações, perda de peso significativa e sustentável, além de melhora na qualidade de vida e comorbidades associadas à obesidade.',
    image: ImagemGastro,
  },
  balao: {
    title: 'O que é Balão Gástrico?',
    description: 'O balão gástrico é um dispositivo de silicone inserido no estômago por via endoscópica e preenchido com líquido à base de soro fisiológico. Seu objetivo é ocupar parte do estômago, promovendo saciedade.',
    indications: 'Indicado para pessoas com IMC (Índice de Massa Corporal) acima de 27 (sobrepeso) ou acima de 30 (obesidade), para quem já tentou emagrecer de outras formas e não conseguiu.',
    benefits: 'Minimamente invasivo, reversível, com rápida recuperação. Reduz o apetite, promove saciedade, auxilia na perda de peso e reeducação alimentar.',
    image: ImagemBalao,
  },
  plasma: {
    title: 'O que é o Uso de plasma argônio?',
    description: 'O plasma de argônio é um tratamento endoscópico usado para tratar o reganho de peso após a cirurgia bariátrica (bypass gástrico). Ele "cauteriza" a anastomose (ligação) entre o estômago e o intestino.',
    indications: 'Indicado para pacientes que realizaram cirurgia bariátrica do tipo bypass gástrico e voltaram a ganhar peso devido à dilatação da anastomose gastrojejunal.',
    benefits: 'Procedimento rápido e seguro, realizado por endoscopia, que restaura a sensação de saciedade e auxilia na retomada da perda de peso, sem a necessidade de uma nova cirurgia.',
    image: ImagemPlasma,
  }
};

type ServiceKey = 'gastroplastia' | 'balao' | 'plasma';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<ServiceKey>('balao');
  const service = servicesData[activeService];

  const getButtonClass = (serviceName: ServiceKey) => {
    return activeService === serviceName
      ? 'bg-[#2E3750] text-white'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  };

  return (
    <section id="servicos" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-left mb-12">
          <p className="text-sm font-semibold text-gray-500 mb-2">SERVIÇOS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Conheça todos os serviços</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Coluna 1: Botões */}
          <div className="flex flex-col space-y-4">
            <button onClick={() => setActiveService('gastroplastia')} className={`text-left p-6 rounded-lg font-semibold transition-all duration-300 ${getButtonClass('gastroplastia')}`}>
              Gastroplastia endoscópica
            </button>
            <button onClick={() => setActiveService('balao')} className={`text-left p-6 rounded-lg font-semibold transition-all duration-300 ${getButtonClass('balao')}`}>
              Balão gástrico
            </button>
            <button onClick={() => setActiveService('plasma')} className={`text-left p-6 rounded-lg font-semibold transition-all duration-300 ${getButtonClass('plasma')}`}>
              Uso de plasma argônio
            </button>
          </div>

          {/* Coluna 2: Textos Dinâmicos */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
            <div>
              <h4 className="font-bold text-md mb-2">Indicações:</h4>
              <p className="text-gray-600 text-sm">{service.indications}</p>
            </div>
            <div>
              <h4 className="font-bold text-md mb-2">Benefícios:</h4>
              <p className="text-gray-600 text-sm">{service.benefits}</p>
            </div>
            <button className="bg-[#2E3750] text-white px-6 py-3 rounded-full flex items-center font-semibold mt-4 group">
              Agendar Avaliação
              <img src={Seta} alt="Seta" className="w-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Coluna 3: Imagem Dinâmica */}
          <div className="flex items-center justify-center">
            <img src={service.image} alt={service.title} className="rounded-lg object-cover max-h-96 w-full transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};