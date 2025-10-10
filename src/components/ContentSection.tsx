// src/components/ContentSection.tsx
import { Link } from "react-router";
import Post1 from "../assets/imagens/posts/post1.webp"
import Post2 from "../assets/imagens/posts/post2.webp"
import Post3 from "../assets/imagens/posts/post3.webp"
// Ícone do Instagram
const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

// Ícone do Facebook
const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
    </svg>
);


export const ContentSection = () => {
    return (
        <section id="conteudos" className="py-20 px-4 bg-white text-gray-800">
            <div className="max-w-[1200px] mx-auto ">
                <p className="text-sm font-semibold  mb-2 text-[#576BA1]">CONTEÚDOS</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Acompanhe nossos conteúdos</h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Link target="_blank" to={"https://www.instagram.com/p/DH9c5FPJh39/"} className="cursor-pointer rounded-xl overflow-hidden shadow-lg" data-aos="flip-left" >
                        <div className="h-full">
                            <img src={Post1} alt="Post sobre balão gástrico" className="w-full h-full object-cover"/>
                        </div>
                    </Link>


                    <Link target="_blank" to={"https://www.instagram.com/p/DHUQIxivxXe/?img_index=1"} className="cursor-pointer rounded-xl overflow-hidden shadow-lg" data-aos="flip-up">
                        <div className="h-full">
                            <img src={Post2} alt="Post sobre como viver os próximos 40 anos" className="w-full h-full object-cover"/>
                        </div>
                    </Link>


                    <Link target="_blank" to={"https://www.instagram.com/p/DGjVCvOhsE5/?img_index=1"} className="cursor-pointer rounded-xl overflow-hidden shadow-lg" data-aos="flip-right">
                        <div className="h-full">
                            <img src={Post3} alt="Post sobre obesidade e casamento" className="w-full h-full object-cover"/>
                        </div>
                    </Link>

                </div>

                <div className="flex justify-end">
                    <button className="border  border-gray-300 text-gray-600 px-6 py-3 rounded-4xl flex items-center space-x-4 hover:bg-gray-100 transition-colors duration-300">
                        <span>Siga minhas redes sociais</span>
                        <InstagramIcon />
                        <FacebookIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};