// src/components/common/PlasmaInfo.tsx
import Curva from "../../assets/imagens/plasma/curva.png"

export const PlasmaInfo = () => {
    const sectionBgColor = 'linear-gradient(180deg,rgba(72, 56, 58, 1) 0%, rgba(55, 43, 45, 1) 100%)';

    return (
        // Um contentor com a cor de fundo da secção de cima para preencher o espaço do recorte.
        <div  className="relative bg-[#483839] pt-7 pb-7" style={{ backgroundImage: sectionBgColor }}  >
            <img src={Curva} className="absolute m-auto top-0 left-0 right-0" alt="imagem de uma curvatura" />

                {/* O conteúdo da secção */}
                <div className="relative pt-24 pb-20 px-4 z-10" data-aos="zoom-in">
                    <div className=" text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            O que é Plasma de Argônio?
                        </h2>
                        <p className="text-white leading-relaxed  mx-auto text-center">
                            Trata-se de um tratamento realizado por meio de endoscopia digestiva que consiste na aplicação <br /> controlada de gás argônio e corrente elétrica para reduzir as dimensões da emenda (anastomose), <br /> realizada durante a cirurgia bariátrica, entre o estômago e o intestino. É um procedimento <br /> ambulatorial minimamente invasivo e com poucos efeitos colaterais.
                        </p>
                    </div>
                </div>
            
        </div>
    );
};