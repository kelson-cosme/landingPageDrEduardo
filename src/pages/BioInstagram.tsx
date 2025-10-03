import Logo from "../assets/logo.webp"
import FundoCard1 from "../assets/fundoCard1.webp"
import Seta from "../assets/array.svg"
import Zap1 from "../assets/zap1.webp"
import Eduardo from "../assets/dr.webp"
import Zap2 from "../assets/zap2.webp"

function BioInstagram() {
    // Gradiente principal do card
    const cardBackgroundGradient = 'linear-gradient(110deg, #44B93C 0%, #4EEA40 100%)';

    return (
        <section className="container m-auto p-5">
            <img className="m-auto mb-8" src={Logo} alt="Duas letras simbolizando a logo do Dr. Eduardo Amui, as letras EA" />

            <div className="m-auto flex flex-col items-center  max-w-[849px]">
                {/* O card principal cria o contexto de empilhamento com 'relative isolate' */}
                <div 
                    className="card relative isolate w-full h-[339px] rounded-3xl" 
                    style={{ backgroundImage: cardBackgroundGradient }}
                >
                    {/* --- CAMADAS DE FUNDO --- */}

                    {/* CAMADA 1: Imagem de Fundo Translúcida (fica no fundo) */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-100 rounded-3xl" 
                        style={{ backgroundImage: `url(${FundoCard1})` }}
                    ></div>

                    {/* CAMADA 2: Degradê Escuro (sobre a imagem de fundo) */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.6)_0%,_rgba(28,63,24,0)_65%)] rounded-3xl"></div>


                    {/* --- CAMADA DE CONTEÚDO PRINCIPAL --- */}

                    {/* CAMADA 3: Container para TODO o conteúdo visível (fica sobre todos os fundos) */}
                    <div className="relative z-20 w-full h-full p-10">
                        
                        {/* Imagens de Destaque */}
                        <img src={Zap1} alt="logo do whatsapp" className="absolute top-6 left-6 bg-[#519742] p-4 rounded-full border border-white/50" />
                        <img src={Eduardo} className="absolute right-20 bottom-0 w-[300px]" alt="Foto do Dr. Eduardo" />
                        <img src={Zap2} alt="logo do whatsapp 3d" className="absolute right-[-10px] top-8 w-24" />
                        <img src={Zap2} alt="Imagem da logo do aplicativo whatsapp (telefone)" className="absolute right-86 bottom-[-15px] z-50" width={89}/>
                        
                        {/* Conteúdo de Texto e Botão */}
                        <div className="h-full flex flex-col justify-center items-start">
                            <h1 className="text-white font-bold text-[24px] mb-8 mt-15">
                                O PRIMEIRO PASSO PARA <br /> TRANSFORMAR SUA SAÚDE <br /> COMEÇA COM UMA CONVERSA.
                            </h1>

                            <button className="bg-white p-[12px] pl-8 pr-8 rounded-[32px] flex items-center text-[18px] font-semibold text-[#2E3750]">
                                AGENDE SUA CONSULTA
                                <img className="ml-5" src={Seta} alt="Flexa"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BioInstagram;