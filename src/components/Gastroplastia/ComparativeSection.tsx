// src/components/Gastroplastia/ComparativeTable.tsx

const comparisonData = [
    { criterion: 'Abordagem', endoscopic: 'Endoscópico', bariatric: 'Cirúrgico' },
    { criterion: 'Duração/reversibilidade', endoscopic: 'Reversível até 6 semanas', bariatric: 'Irreversível' },
    { criterion: 'Acesso', endoscopic: 'Via oral', bariatric: 'Por videolaparoscopia' },
    { criterion: 'Perda média de peso', endoscopic: 'Média de 20 a 30%', bariatric: 'Média de 40%' },
    { criterion: 'Indicação por IMC', endoscopic: 'IMC entre 30-40', bariatric: 'IMC acima de 35' },
    { criterion: 'Anestesia/sedação', endoscopic: 'Anestesia geral', bariatric: 'Anestesia geral' },
    { criterion: 'Local do procedimento', endoscopic: 'Clínica com suporte', bariatric: 'Somente hospital' },
    { criterion: 'Recuperação', endoscopic: '7 dias ou mais', bariatric: '15 a 30 dias' },
    { criterion: 'Complicações', endoscopic: 'Baixo índice de complicações', bariatric: 'Maior índice de complicações' },
    { criterion: 'Opções futuras', endoscopic: 'Nova redução endoscópica ou conversão para cirurgias bariátricas', bariatric: 'Reoperação, sutura endoscópica ou plasma de argônio' },
    { criterion: 'Cicatriz', endoscopic: 'Nenhuma cicatriz', bariatric: 'Tipicamente 4 a 5 pequenas cicatrizes' },
  ];
  
  export const ComparativeTable = () => {
    return (
      <section id="comparativo" className="py-20 px-4 bg-[#413E39]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-sm font-semibold text-gray-400 mb-2 uppercase">Tabela Comparativa</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare as opções de tratamento</h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-12">
            Veja as principais diferenças entre os métodos disponíveis.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto rounded-2xl lg:rounded-4xl overflow-hidden shadow-2xl font-sans">
          {/* Cabeçalho da Tabela */}
          <div className="grid grid-cols-3 font-semibold text-white text-center ">
            <div className="bg-white text-[.7rem]  text-[#000000] lg:pt-10 lg:pb-10 flex items-center justify-center lg:text-2xl">Critérios</div>
            <div className="bg-[#2E3750] text-[.7rem] lg:text-2xl lg:pt-10 lg:pb-10 flex items-center justify-center ">Redução endoscópica</div>
            <div className="bg-white text-[.7rem]  text-[#000000] lg:text-2xl lg:pt-10 lg:pb-10 flex items-center justify-center ">Cirurgia bariátrica</div>
          </div>
  
          {/* Corpo da Tabela */}
          <div>
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-t border-gray-500 items-center">
                <div className="bg-white text-black p-1 lg:p-4 font-bold lg:text-sm text-[.5rem] h-full flex items-center">{item.criterion}</div>
                <div className="bg-[#2E3750] text-white p-1 lg:p-4 lg:text-sm text-[.5rem] h-full flex items-center ">{item.endoscopic}</div>
                <div className="bg-white text-black lg:p-4 p-1 lg:text-sm text-[.5rem] h-full ">{item.bariatric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };