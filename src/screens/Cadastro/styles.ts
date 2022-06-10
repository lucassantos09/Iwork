import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex:1;
    padding: 0 24px;
    padding-top: 10px;
    background-color: #fff;
    flex-direction: column;
`;

export const ConteudoLogin = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const ConteudoEmail = styled.View`
margin-top: 16px;
    flex-direction: column;
`;

export const ConteudoNome = styled.View`
margin-top: 16px;
    flex-direction: column;
`;

export const ConteudoTelefone = styled.View`
margin-top: 16px;
    flex-direction: column;
`;

export const ConteudoSenha = styled.View`
    flex-direction: column;
    margin-top: 16px;
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

export const InputEmail = styled.TextInput`
    border-radius: 14px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    height: 56px;
    padding-left: 16px;
`;

export const TextoLogin = styled.Text`
    color: #000;
    font-size: 25px;
    font-family: "PoppinsBold";
    justify-content: center;
    text-align: center;
    margin-bottom:15px;
`;

export const InputSenha = styled.TextInput`
    height: 56px;
    flex: 1;
`;

export const BotaoLogin = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    border-radius: 14px;
    background-color: #00BBC9;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

export const ConteudoTitulo = styled.Text`
    color: #FFF;
`;

export const BotaoVoltar = styled.Text`
color: #555555;
font-size: 15px;
text-align: center;
width: 100px;
margin: 10px auto 0 auto;
`;

export const ConteudoInput = styled.View`
    border-radius: 14px;
    border-width: 1px;
    border-style: solid;
    height: 56px;
    border-color: #DDDDDD;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
`;

export const Header = styled.View`
margin-top: 60px;
margin-bottom: 20px;
`;

export const TrabalheConosco = styled.View`
background-color: #00BBC9;
border-radius: 20px;
align-items: center;
justify-content: space-around;
flex-direction: row;
padding: 0 31px;
height: 150px;
`;

export const TituloTrabalheConosco = styled.Text`
font-size: 34px;
padding-left: 50px;
padding-right: 20px;
font-weight: 700;
color: #FFF;
`;

export const ConteudoSVG = styled.View`
margin-top: -62px;
`;


