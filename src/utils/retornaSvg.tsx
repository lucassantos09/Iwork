import React from "react";
import Torneira from '../assets/svg/torneira.svg';
import Chave from '../assets/svg/chave.svg';
import Construtor from '../assets/svg/construtor.svg';
import Pintura from '../assets/svg/pintura.svg';
import Reboque from '../assets/svg/reboque.svg';
import Vassoura from '../assets/svg/vassoura.svg';
import Arrowleft from '../assets/svg/arrow-left.svg';



export default function retornaSvg(categoria: string, largura = 56, altura = 56) {
    switch (categoria) {
        case 'Torneira':
            return <Torneira width={largura} height={altura} />

        case 'Chave':
            return <Chave width={largura} height={altura} />

        case 'Construtor':
            return <Construtor width={largura} height={altura} />

        case 'Pintura':
            return <Pintura width={largura} height={altura} />

        case 'Reboque':
            return <Reboque width={largura} height={altura} />

        case 'Vassoura':
            return <Vassoura width={largura} height={altura} />
            
        case 'ArrowLeft':
            return <Arrowleft width={largura} height={altura} />
    }
}