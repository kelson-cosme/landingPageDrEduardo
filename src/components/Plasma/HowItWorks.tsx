import { useState } from "react";
import { CtaButton } from '../CtaButton';

// Importando a imagem de capa local que já existe no projeto.
import VideoThumbnail from "../../assets/imagens/plasma/video.webp";
import { Link } from "react-router";

// Componente SVG para a seta


export const HowItWorks = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "tOvUH58-83s"; // ID do vídeo do YouTube

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section id="funcionamento" className="bg-[#372D2E] py-20 px-4 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-semibold text-[#F9E6C1] mb-2 uppercase">Procedimento</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Como o Plasma de Argônio age no seu corpo?</h2>
                <p className="max-w-3xl mx-auto text-white mb-12">
                O Plasma de Argônio cauteriza pontos no estômago por endoscopia, reduzindo a elasticidade e prolongando a saciedade. <span className="font-bold">Menos fome, mais controle.</span></p>

                {/* Player de Vídeo */}
                <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl mb-12  aspect-video">
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


                <div className="mt-12 text-center">
                    <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
                    <CtaButton className="cursor-pointer m-auto mt-8 self-start">
                    AGENDAR MINHA AVALIAÇÃO
                    </CtaButton>                      
                    </Link>
        
                </div>
            </div>
        </section>
    );
};