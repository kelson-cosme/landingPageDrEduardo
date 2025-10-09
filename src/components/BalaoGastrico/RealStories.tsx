// src/components/BalaoGastrico/RealStories.tsx
import { useState } from 'react';
import { CtaButton } from '../CtaButton';
import PacienteStory from '../../assets/imagens/balao/PacienteStory.webp'; // Usando a imagem avatar3.webp como capa

export const RealStories = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "I5p4VoNyqb4"; // ID do vídeo do YouTube Shorts

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section id="historias-reais" className="bg-[#413E39] py-20 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center" > 

                {/* Coluna de Texto */}
                <div className="text-white text-center md:text-left" data-aos="zoom-in"> 
                    <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
                        Mudança Real
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight  lg:mb-8">
                        Histórias reais de quem recuperou saúde, autoestima e esperança.
                    </h2>
                    <CtaButton className="mx-auto md:mx-0 lg:block hidden">
                        AGENDAR MINHA AVALIAÇÃO
                    </CtaButton>
                </div>

                {/* Coluna de Vídeo "Story" */}
                <div className="relative max-w-[300px] mx-auto w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group bg-black" data-aos="flip-right">
                    {!isPlaying ? (
                        <div className="relative cursor-pointer h-full" onClick={handlePlayClick}>
                            <img
                                src={PacienteStory}
                                alt="História de paciente - Elen"
                                className="w-full h-full object-cover"
                            />
               
                            <div className="absolute bottom-0 left-0 right-0 p-5 ">
                                
                            </div>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full absolute bottom-0 left-0"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="História de Sucesso - Elen"
                        ></iframe>
                    )}
                </div>

                <CtaButton className="mx-auto md:mx-0 lg:hidden block">
                        AGENDAR MINHA AVALIAÇÃO
                    </CtaButton>
            </div>
        </section>
    );
};