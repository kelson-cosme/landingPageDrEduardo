import { useState } from "react";
// Importando a imagem de capa local que já existe no projeto.
import VideoThumbnail from "../../src/assets/imagens/apresentacao.png";


export const Apresentacao = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "rGaXvn100wc"; // ID do vídeo do YouTube

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section id="funcionamento" className="bg-[#262E46] pt-10 pb-1 px-4 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-semibold text-[#F9E6C1] mb-2 uppercase" data-aos="zoom-out-up" >Especialidade</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="zoom-out-down">Dr. Eduardo Amui - Especialista em Obesidade sem Cirurgia</h2>
                <p className="max-w-3xl mx-auto text-gray-300 mb-12 " data-aos="zoom-out-up">
                    Há mais de 10 anos dedicado ao emagrecimento saudável por métodos endoscópicos, ajudando pessoas a vencerem a obesidade sem cortes e com inovação.
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
                            title="Dr. Eduardo Amui - Especialista em Obesidade sem Cirurgia"
                        ></iframe>
                    )}
                </div>

            </div>
        </section>
    );
};