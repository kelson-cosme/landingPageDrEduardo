// src/components/LocationSection.tsx

import Logo from '../assets/logo.webp';
import DrImage from '../assets/imagens/Eduardo.webp';
import ClinicImage from "../assets/imagens/espcao.webp"
import Seta2 from '../assets/imagens/gastroplatia/array2.svg';
import fundo3 from "../assets/imagens/fundo3.webp"

export const LocationSection = () => {
  const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

  return (
    <section id="contato" className="py-20 px-4 bg-[#2E3750] text-white overflow-hidden bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(${fundo3})`}}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna Esquerda: Conteúdo */}
        <div className="text-center lg:text-left">
          <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-12 w-auto mx-auto lg:mx-0 mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Clínica de<br />emagrecimento<br />sem cortes.
          </h2>
          <p className="text-lg text-gray-300 mb-8">SB Medical Tower</p>
          <button 
            className="pl-6 pr-2 py-2 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 mx-auto lg:mx-0 group" 
            style={{ backgroundImage: cardBackgroundGradient2 }}
          >
            AGENDAR MINHA AVALIAÇÃO
            <div className="bg-white rounded-full p-2 ml-4">
              <img src={Seta2} alt="Seta" className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        </div>

        {/* Coluna Direita: Imagens Sobrepostas */}
        <div className="relative h-[400px] mt-12 lg:mt-0">
          <img 
            src={ClinicImage} 
            alt="Interior da clínica" 
            className="absolute top-0 left-0 w-3/5 rounded-lg shadow-2xl z-20"
          />
          <img 
            src={DrImage} 
            alt="Dr. Eduardo Amui na clínica" 
            className="absolute bottom-0 right-0 w-4/5 max-w-sm rounded-lg shadow-lg z-10"
          />
        </div>

      </div>
    </section>
  );
};