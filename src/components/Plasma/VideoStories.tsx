// src/components/common/VideoStories.tsx
import { useState } from 'react';
import PacienteStory1 from '../../assets/imagens/plasma/mudanca1.webp'; // Imagem para o primeiro vídeo
import PacienteStory2 from '../../assets/imagens/plasma/mudanca2.webp'; // Imagem para o segundo vídeo
import { CtaButton } from '../CtaButton';
import { Link } from 'react-router';

// Componente reutilizável para o leitor de vídeo em formato "story"
const StoryPlayer = ({ videoId, thumbnail }: { videoId: string, thumbnail: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!isPlaying) {
        return (
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img src={thumbnail} alt="História de paciente" className="absolute inset-0 w-full h-full object-cover filter  scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full   flex items-center justify-center ">

                    </div>
                </div>
   
            </div>
        );
    }

    return (
        <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
                className="w-full h-full absolute top-0 left-0"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Depoimento de Paciente"
            ></iframe>
        </div>
    );
};


export const VideoStories = () => {
    return (
        <section id="video-stories" className="bg-[#372D2E] py-20 px-4">
            <div className="max-w-4xl mx-auto  text-white">
                <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F9E6C1]">
                    Mudança Real
                </p>
                <h2 className="text-3xl md:text-3xl font-bold leading-tight mb-12 ">
                    Cada depoimento é uma vitória. Assista quem venceu o reganho de peso com o Plasma de Argônio.
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <StoryPlayer 
                        videoId="I5p4VoNyqb4"
                        thumbnail={PacienteStory1}
                    />
                    <StoryPlayer 
                        videoId="v7fSB81dbfE" // SUBSTITUA PELO ID DO SEGUNDO VÍDEO
                        thumbnail={PacienteStory2}
                    />
                </div>
            </div>

            <div className='mt-9'>
                <Link target='_blank' to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20Dr.%20Eduardo!%20Tenho%20interesse%20em%20saber%20mais%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o"}>
                <CtaButton className='cursor-pointer m-auto'>
                    AGENDAR MINHA AVALIAÇÃO
                </CtaButton>                
                </Link>

            </div>
        </section>
    );
};