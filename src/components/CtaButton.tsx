// src/components/common/CtaButton.tsx
import React from 'react';
import Seta from "../assets/imagens/gastroplatia/array2.svg"

// Ícone da seta


interface CtaButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ children, onClick, className }) => {
    const gradientBackground = 'linear-gradient(0deg, rgba(70, 179, 60, 1) 23%, rgba(78, 234, 64, 1) 65%)';

    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-full flex items-center justify-center text-base font-semibold text-white z-10 group ${className}`}
            style={{ backgroundImage: gradientBackground }}
        >
            {children}
            <div className="bg-white/20 rounded-full  ml-4 group-hover:translate-x-1 transition-transform duration-300">
                <img src={Seta} alt="imagem de uma seta aprontado para cima" />
            </div>
        </button>
    );
};