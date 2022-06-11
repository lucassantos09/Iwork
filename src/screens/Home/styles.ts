import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color: #F4F6FA;
`;
export const Header = styled.View`
    width: 100%;
    justify-content: flex-start;
`;

export const ConteudoTitulo = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin: 40px 20px
`;

export const Titulo = styled.Text`
    font-family: 'PoppinsRegular';
    font-size: 20px;
    color: #222222;
`;

export const Sair = styled.TouchableOpacity`
    font-family: 'PoppinsRegular';
    font-size: 14px;
    color: #222222;
`;

export const TextoSair = styled.Text`
    font-family: 'PoppinsRegular';
    font-size: 14px;
    color: #222222;
`;



export const ConteudoTituloCategoria = styled.View`
    justify-content: flex-start;
    margin: 0 20px 20px 20px

`;
export const TituloCategoria = styled.Text`
    font-family: 'PoppinsRegular';
    font-size: 18px;
    color: #222222;
`;

export const Categorias = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
`;
