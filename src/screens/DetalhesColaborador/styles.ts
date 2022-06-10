import { LinearGradient } from "react-native-svg";
import styled from "styled-components/native";


export const Container = styled.View `
    flex : 1;
    background-color: #F4F6F4;
    padding: 0 24px;
    padding-top: 68px;
`
export const Titulo = styled.Text `
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin:  0 auto;
    color: #222222;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    width: 88%;
    height: 496px;
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