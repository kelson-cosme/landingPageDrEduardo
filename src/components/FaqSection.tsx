// src/components/FaqSection.tsx

import { useState } from 'react';
import { Link } from 'react-router';

// Dados das perguntas e respostas
const faqData = [
  {
    question: 'O balão gástrico é indicado para qualquer pessoa?',
    answer: 'É indicado para pessoas com IMC acima de 27, que queiram perder peso de forma saudável, sem realizar cirurgia.',
  },
  {
    question: 'A gastroplastia endoscópica substitui a cirurgia bariátrica?',
    answer: 'A gastroplastia pode evitar a cirurgia bariátrica, evitando também as complicações durante e após a cirurgia, com fístulas, deficiência de vitaminas e alcoolismo.',
  },
  {
    question: 'Qual o tempo de recuperação após os procedimentos endoscópicos?',
    answer: 'A recuperação é geralmente rápida. Para procedimentos como o balão gástrico e a gastroplastia endoscópica, a maioria dos pacientes retorna às suas atividades normais em 2 a 3 dias, seguindo as orientações médicas para dieta e repouso.',
  },
  {
    question: 'Vocês atendem algum plano de saúde?',
    answer: 'Não atendemos planos, pois nossas consultas são personalizadas, levando mais do que 1 hora, onde toda a atenção é voltada para você, diferente das consultas pelo convênio que levam 10 minutos e o médico não lhe dá a atenção devida.',
  },
];

// Componente para um único item do FAQ (pergunta + resposta)
const FaqItem = ({ item, isOpen, onClick }: { item: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left leading-tight  cursor-pointer"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-800 text-[1.7rem] ">{item.question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 text-[1.3rem] leading-tight text-justify">
          {item.answer}
        </p>
      </div>
    </div>
  );
};


export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 bg-white text-gray-800">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 lg:gap-16 items-start">
                {/* Coluna Esquerda: Título e CTA */}
                <div className="lg:sticky top-28">
                    <p className="text-sm font-semibold text-gray-500 mb-2">F.A.Q</p>
                    <h2 className="text-4xl text-center lg:text-start md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                    <p className="text-gray-500 mb-8 lg:block hidden">Não achou o que procurava? Fale com a gente! Estamos prontos para te ajudar com todas as informações.</p>
                    <button className="lg:flex hidden border border-gray-300 text-gray-600  rounded-lg items-center space-x-2 hover:bg-gray-100 transition-colors duration-300">
                    <Link  target='_blank' className='flex px-6 py-3 w-full' to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20tenho%20algumas%20d%C3%BAvidas%20espec%C3%ADficas%20sobre%20o%20meu%20caso.%20Poderia%C2%A0me%C2%A0ajudar%3F"}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.052 24l1.687-6.163c-1.041-1.804-1.598-3.825-1.598-5.918 0-5.418 4.381-9.8 9.8-9.8s9.8 4.382 9.8 9.8-4.381 9.8-9.8 9.8c-2.004 0-3.933-.578-5.588-1.631L.052 24zM8.381 4.542c4.102 0 7.424 3.322 7.424 7.424s-3.322 7.424-7.424 7.424-7.424-3.322-7.424-7.424c0-2.019.811-3.865 2.13-5.23l.119-.148-1.378 4.253 4.41-1.353.133-.082c1.325-.826 2.928-1.31 4.63-1.31l-.014.002z"></path></svg>
                            <span className=''>Enviar mensagem no WhatsApp</span>
                  </Link>
                    </button>
                </div>

                {/* Coluna Direita: Acordeão de Perguntas */}
                <div>
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>

                <p className="text-gray-500 lg:hidden block mt-5 mb-5">Não achou o que procurava? Fale com a gente! Estamos prontos para te ajudar com todas as informações.</p>
                  <button className="lg:hidden flex border border-gray-300 text-gray-600   rounded-lg items-center space-x-2 hover:bg-gray-100 transition-colors duration-300">
                <Link  target='_blank' className='flex px-6 py-3 w-full' to={"https://api.whatsapp.com/send?phone=5565999558558&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Dr.%20Eduardo%20Amui%20e%20tenho%20algumas%20d%C3%BAvidas%20espec%C3%ADficas%20sobre%20o%20meu%20caso.%20Poderia%C2%A0me%C2%A0ajudar%3F"}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.052 24l1.687-6.163c-1.041-1.804-1.598-3.825-1.598-5.918 0-5.418 4.381-9.8 9.8-9.8s9.8 4.382 9.8 9.8-4.381 9.8-9.8 9.8c-2.004 0-3.933-.578-5.588-1.631L.052 24zM8.381 4.542c4.102 0 7.424 3.322 7.424 7.424s-3.322 7.424-7.424 7.424-7.424-3.322-7.424-7.424c0-2.019.811-3.865 2.13-5.23l.119-.148-1.378 4.253 4.41-1.353.133-.082c1.325-.826 2.928-1.31 4.63-1.31l-.014.002z"></path></svg>
                          <span className=''>Enviar mensagem no WhatsApp</span>
                </Link>
                      
                      </button>

            </div>
        </section>
    );
};