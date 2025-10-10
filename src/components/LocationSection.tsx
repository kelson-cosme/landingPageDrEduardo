// src/components/LocationSection.tsx

import Logo from '../assets/logo.webp';
import DrImage from '../assets/imagens/Eduardo.webp';
import ClinicImage from "../assets/imagens/espcao.webp"
import Seta2 from '../assets/imagens/gastroplatia/array2.svg';
import fundo3 from "../assets/imagens/fundo3.webp"
import { Link } from 'react-router';

export const LocationSection = () => {
  const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

  return (
    <section id="contato" className="py-20 px-4 bg-[#2E3750] text-white overflow-hidden bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(${fundo3})`}}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 lg:gap-16 items-center">
        
        {/* Coluna Esquerda: Conteúdo */}
        <div className="text-center lg:text-left" data-aos="zoom-out">
          <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-12 w-auto mx-auto lg:mx-0 mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold  mb-4 ">
            Clínica de<br />emagrecimento<br />sem cortes.
          </h2>
          <p className="text-lg text-gray-300 mb-8">SB Medical Tower</p>

          <Link target='_blank' to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20entender%20qual%20dos%20tratamentos%20%C3%A9%20mais%20indicado%C2%A0para%C2%A0mim"}>
          <button 
            className="pl-6 cursor-pointer pr-2 py-2 rounded-full lg:flex items-center justify-center text-base font-semibold text-white z-10 mx-auto lg:mx-0 group hidden " 
            style={{ backgroundImage: cardBackgroundGradient2 }}
          >
            AGENDAR MINHA AVALIAÇÃO
            <div className="bg-white rounded-full p-2 ml-4">
              <img src={Seta2} alt="Seta" className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>          
          </Link>

        </div>

        {/* Coluna Direita: Imagens Sobrepostas */}
        <div className="relative h-[400px]  mt-12 lg:mt-0">
          <img 
            src={ClinicImage} 
            alt="Interior da clínica" 
            className="absolute top-0 lg:left-[-9em]  w-3/5 rounded-lg shadow-2xl z-20" 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <img 
            src={DrImage} 
            alt="Dr. Eduardo Amui na clínica" 
            className="absolute bottom-0 top-3.5 right-0 lg:right-20 w-3/5 max-w-sm rounded-lg shadow-lg z-10"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>


        <Link target='_blank' to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
        <button 
            className="cursor-pointer pl-6 pr-2 py-2 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 mx-auto lg:mx-0 group lg:hidden " 
            style={{ backgroundImage: cardBackgroundGradient2 }}
          >
            AGENDAR MINHA AVALIAÇÃO
            <div className="bg-white rounded-full p-2 ml-4">
              <img src={Seta2} alt="Seta" className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>        
        </Link>


      </div>
    </section>
  );
};