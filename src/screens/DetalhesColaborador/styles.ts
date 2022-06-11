import { LinearGradient } from "react-native-svg";
import styled from "styled-components/native";


export const Container = styled.View `
    flex : 1;
    background-color: #F4F6F4;
    padding: 0 30px;
    align-items: center;
    padding-top: 28px;
`
export const Titulo = styled.Text `
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    margin:  0 auto;
    color: #222222;
`;

export const TituloColaborador = styled.Text `
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin:  0 auto;
    color: #222222;
`;



export const CardLista = styled.View `
    width: 100%;
    justify-content: flex-start;
    align-self: center;
    margin:  0 auto;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`


export const Header = styled.View `
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`

export const InfoColaborador = styled.View `
    width: 100%;
    height: 420px;
    border-radius: 20px;  
    background-color: rgba(168, 179, 171, 0.4);
    margin-top: 15px;
    padding-top: 10px;
`
export const ConteudoSvg = styled.View `
    width: 100%;
    border-radius: 20px;  
`

export const BotaoVoltar = styled.TouchableOpacity `
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    align-items: center;
    align-self: flex-start;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(179, 131, 1, 0.12);
    border-radius: 12px;
`

export const Linha = styled.View `
flex-direction: row;
justify-content: space-around;
margin-top: 38px;
align-items: center;
`


export const BotaoAgendar = styled.TouchableOpacity `
width: 135px;
height: 48px;
background-color: #00BBC9;
border-radius: 100px;
align-items: center;
justify-content: center;
`

export const Preco = styled.Text `
font-weight: bold;
`;


export const Descricao = styled.View `
width: 100%;
margin-top: 38px;
align-items: flex-start;
justify-content: center;
;

`
export const NomeDescricao = styled.Text `
margin-bottom: 13px;
text-align: center;
font-size: 20px;
`;


export const TextoDescricao = styled.Text `
color: #555555;

`;

export const ConteudoBotao = styled.Text `
font-weight: bold;

`

