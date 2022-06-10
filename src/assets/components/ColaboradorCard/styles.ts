import styled from "styled-components/native";


export const Container = styled.TouchableOpacity `
    width: 42%;
    height: 214px;
    background: #FFFFFF;
    align-items: center;
    border-radius: 10px;
    margin-left: 10px;
    margin-bottom: 16px;
    margin-right: 10px;
    box-shadow: 0px 30px 25px rgba(238, 238, 238, 0.4);
    flex-flow: column;
`

export const ConteudoSvg = styled.View `
    width: 70px;
    height: 70px;
    margin-top: 20px;
    background: #F4F6FA;
    border-radius: 35px;
`

export const Nome = styled.Text `
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 23px;
    color: #222222;
`;


export const Preco = styled.Text `
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px; 
    margin-top: 8px;
    color: #666666;
`;


export const Bar = styled.View `
    width: 100%;
    height: 0;
    margin-top: 21px;
    background: #F4F6FA;
    border-radius: 35px;
    border: 0.5px solid #EEEEEE;
`

export const Contratacoes = styled.Text `
    font-style: normal;
    font-weight: 400;
    margin-top: 5px;
    font-size: 12px;
    color: #666666;
`;