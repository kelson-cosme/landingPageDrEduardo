// src/components/TestimonialCard.tsx

import React from 'react';

// Props para o nosso componente de card
interface TestimonialCardProps {
  avatar: string;
  name: string;
  time: string;
  text: React.ReactNode;
}

// Componente para o ícone de estrela
const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Componente para o ícone do Google
const GoogleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.22,5.73 17.02,6.82 17.02,6.82L19.07,4.78C19.07,4.78 16.57,2.77 12.19,2.77C6.42,2.77 2,7.21 2,12.5C2,17.79 6.42,22.23 12.19,22.23C17.6,22.23 21.54,18.79 21.54,12.81C21.54,11.88 21.46,11.47 21.35,11.1Z" fill="#4285F4"/>
    </svg>
);


export const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, time, text }) => {
  return (
    // Container principal do card
    <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full max-w-sm flex-shrink-0">
      {/* Cabeçalho com avatar, nome e ícone do Google */}
      <div className="flex items-center mb-4">
        <img src={avatar} alt={`Foto de ${name}`} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div className="flex-grow">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
        <GoogleIcon />
      </div>
      {/* Avaliação com estrelas */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>
      {/* Texto do depoimento */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};