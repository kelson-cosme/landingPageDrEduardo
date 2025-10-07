// src/components/BalaoGastrico/Procedure.tsx

export const Procedure = () => {
    return (
        <section id="procedimento" className="bg-[#F8F9FA] py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                
                {/* Coluna do Título */}
                <div className="flex-shrink-0 md:w-1/3 text-center md:text-right">
                    <h2 className="text-4xl md:text-4xl font-bold text-[#2E3750] leading-tight">
                        Como é feito<br />o procedimento?
                    </h2>
                </div>

                {/* Divisor Vertical (visível apenas em telas médias e maiores) */}
                <div className="hidden md:block w-px h-40 bg-gray-200"></div>

                {/* Coluna do Texto */}
                <div className=" md:w-2/3 text-center md:text-left">
                    <div className="space-y-5 text-[#2D2D2D] text-justify">
                    O <span className="font-bold"> Plasma de Argônio</span>  é um procedimento realizado sob sedação por via endoscópica em ambiente ambulatorial, sem a necessidade de internação prévia ou anestesia geral. No procedimento, um cateter duplo é passado por dentro do endoscópio. O gás argônio passa por um lado do cateter, enquanto, do outro, passa uma corrente elétrica. <br />
                    <br />
                    A interação do gás argônio com a corrente elétrica na ponta do cateter permite sua transformação em energia térmica, formando um plasma de coagulação que age sobre a anastomose. É o processo de cicatrização da cauterização posteriormente que causa o estreitamento da área. <br />
                    <br />

                    Para atingir a eficácia necessária, o tratamento precisa ser feito em duas a três sessões, com intervalos de um a dois meses entre cada sessão.                    
                    </div>
                </div>
            </div>
        </section>
    );
};