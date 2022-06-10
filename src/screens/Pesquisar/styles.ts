import styled from "styled-components/native";


export const ConteudoPesquisa = styled.View`
    margin: 26px 26px;   
    flex-direction: column;
    margin-top: 30px;
`;

export const Container = styled.View`
    flex:1;
    background-color: #F4F6FA;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 44px;
    margin: 44px 30px 0 30px;
    text-align: center;
`;

export const InfoInput = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

`;

export const Titulo = styled.Text`
    color: #555555;
    font-size: 14px;
    margin-left: 10px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
width: 40px;
    height: 40px;
    background: #FFFFFF;
    align-items: center;
    align-self: flex-start;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(179, 131, 1, 0.12);
    border-radius: 12px;
`;


export const InputPesquisa = styled.TextInput`
    border-radius: 14px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    height: 56px;
    padding-left: 16px;
`;


export const TextoPesquisa = styled.Text`
    color: #555555;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-left: 85px;
`;