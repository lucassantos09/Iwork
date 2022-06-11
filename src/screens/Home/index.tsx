import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { FlatList } from "react-native";
import CategoriaCard from "../../assets/components/CategoriaCard";
import Torneira from '../../assets/svg/torneira.svg';
import { AuthContext } from "../../context/authContext";

import { Categorias, Container, ConteudoTitulo, ConteudoTituloCategoria, Header, Sair, TextoSair, Titulo, TituloCategoria } from "./styles";


export default function Home() {

    const navigation = useNavigation();

    const {logout } = useContext(AuthContext);

    function SairTudo() {
        navigation.navigate('Login' as never, {
        } as never);
    }
    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Bem-vindo ao iWork!</Titulo>

                <Sair onPress={logout }>
                    <TextoSair>
                        Sair
                    </TextoSair>
                </Sair>
            </ConteudoTitulo>

            <ConteudoTituloCategoria>
                <TituloCategoria>Categorias</TituloCategoria>
            </ConteudoTituloCategoria>

            <Categorias>
                <CategoriaCard nome="Encanamento" nomeSvg="Torneira" />
                <CategoriaCard nome="Reparos" nomeSvg="Chave" />
            </Categorias>

            <Categorias>
                <CategoriaCard nome="Limpeza" nomeSvg="Vassoura" />
                <CategoriaCard nome="Pintura" nomeSvg="Pintura" />
            </Categorias>

            <Categorias>
                <CategoriaCard nome="Construcao" nomeSvg="Construtor" />
                <CategoriaCard nome="Frete" nomeSvg="Reboque" />
            </Categorias>
        </Container>

    )
}
