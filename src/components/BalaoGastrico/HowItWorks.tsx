import { useState } from "react";
// Importando a imagem de capa local que já existe no projeto.
import VideoThumbnail from "../../assets/imagens/balao/video.webp";
import { Link } from "react-router";
// Componente SVG para a seta
const Seta2 = () => (
    <svg className="w-6 h-6" fill="none" stroke="#46B33C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const HowItWorks = () => {
    const cardBackgroundGradient2 = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "hRQtubuEBaA"; // ID do vídeo do YouTube

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section id="funcionamento" className="bg-[#413E39] py-20 px-4 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-semibold text-[#F9E6C1] mb-2 uppercase" data-aos="zoom-out-up" >Procedimento</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="zoom-out-down">Como funciona o Balão Gástrico?</h2>
                <p className="max-w-3xl mx-auto text-gray-300 mb-12 " data-aos="zoom-out-up">
                    Com acompanhamento especializado, ele se torna uma ferramenta <br className="lg:block hidden" /> eficaz para quem busca emagrecer com saúde e segurança.
                </p>

                {/* Player de Vídeo */}
                <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl mb-12  aspect-video" data-aos="flip-left">
                    {!isPlaying ? (
                        <div className="relative cursor-pointer h-full" onClick={handlePlayClick}>
                            <img
                                src={VideoThumbnail} // Usando a imagem local importada
                                alt="Dr. Eduardo Amui - Vídeo explicativo sobre o Balão Gástrico"
                                className="w-full h-full object-cover"
                            />

                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full absolute top-0 left-0"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&start=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Como funciona o Balão Gástrico"
                        ></iframe>
                    )}
                </div>

                {/* Detalhes do Procedimento */}

                <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20quero%20agendar%20uma%20consulta%20para%20conversar%20sobre%20o%C2%A0Bal%C3%A3o%C2%A0G%C3%A1strico"}>
                <button className="cursor-pointer pl-6 pr-2 py-2 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 mx-auto group" style={{ backgroundImage: cardBackgroundGradient2 }}>
                    AGENDAR MINHA AVALIAÇÃO
                    <div className="bg-white rounded-full p-2 ml-4 group-hover:translate-x-1 transition-transform duration-300">
                        <Seta2 />
                    </div>
                </button>
                </Link>

            </div>
        </section>
    );
};