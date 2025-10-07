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
                <div className="max-w-md md:w-2/3 text-center md:text-left">
                    <div className="space-y-5 text-gray-600">
                        <p>
                            A colocação do balão gástrico é realizada por endoscopia, com o paciente sob sedação leve. <br />
                            O balão, ainda vazio, é introduzido pela boca até o estômago e, em seguida, é preenchido com soro fisiológico.
                        </p>
                        <p>
                            O procedimento dura em média 20 a 30 minutos, é ambulatorial e não exige internação. Após algumas horas de observação, o paciente recebe alta e pode retornar às atividades em poucos dias.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};