// src/components/Footer.tsx

import Logo from '../assets/logo.webp';
import Mapa from '../assets/imagens/localizacao/fundo.webp'; // Imagem do mapa

// Ícones de Redes Sociais
const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.052 24l1.687-6.163c-1.041-1.804-1.598-3.825-1.598-5.918 0-5.418 4.381-9.8 9.8-9.8s9.8 4.382 9.8 9.8-4.381 9.8-9.8 9.8c-2.004 0-3.933-.578-5.588-1.631L.052 24zM8.381 4.542c4.102 0 7.424 3.322 7.424 7.424s-3.322 7.424-7.424 7.424-7.424-3.322-7.424-7.424c0-2.019.811-3.865 2.13-5.23l.119-.148-1.378 4.253 4.41-1.353.133-.082c1.325-.826 2.928-1.31 4.63-1.31l-.014.002z" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);


export const Footer = () => {
    return (
        <footer className="bg-[#2E3750] text-white pt-16">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Seção Principal do Rodapé */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Coluna 1: Mapa */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <img src={Mapa} alt="Mapa da localização da clínica" className="rounded-lg w-full" />
                    </div>

                    {/* Coluna 2: Logo e Descrição */}
                    <div>
                        <img src={Logo} alt="Logotipo Dr. Eduardo Amui" className="h-10 mb-4"/>
                        <p className="text-sm text-gray-400 mb-4">
                            Endoscopista, Gastroplastia Endoscópica e Tratamentos para Obesidade
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300"><WhatsAppIcon /></a>
                            <a href="#" className="hover:text-gray-300"><InstagramIcon /></a>
                            <a href="#" className="hover:text-gray-300"><FacebookIcon /></a>
                        </div>
                    </div>

                    {/* Coluna 3: Navegação */}
                    <div>
                        <h4 className="font-bold mb-4">Navegação:</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tratamentos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Localização</a></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato */}
                    <div>
                        <h4 className="font-bold mb-4">Contato:</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Seg - Sex | 08h às 19h</li>
                            <li>(65) 9 9955-8558</li>
                        </ul>
                    </div>
                </div>

                {/* Seção Secundária (Direitos Autorais) */}
                <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2025 Dr. Eduardo Amui. Todos os direitos reservados.</p>
                    <p className="my-2 md:my-0">Política de privacidade</p>
                    <p>Desenvolvido por Invictus Web.</p>
                </div>
            </div>
        </footer>
    );
};