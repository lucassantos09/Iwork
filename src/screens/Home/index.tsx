import React from "react";
import { FlatList } from "react-native";
import CategoriaCard from "../../assets/components/CategoriaCard";
import Torneira from '../../assets/svg/torneira.svg';

import { Categorias, Container, ConteudoTitulo, ConteudoTituloCategoria, Header, Sair, Titulo, TituloCategoria } from "./styles";


export default function Home() {


    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Bem-vindo ao iWork!</Titulo>
                <Sair>Sair</Sair>
            </ConteudoTitulo>

            <ConteudoTituloCategoria>
                <TituloCategoria>Categorias</TituloCategoria>
            </ConteudoTituloCategoria>

            <Categorias>
                <CategoriaCard nome="Encanamento"   nomeSvg="Torneira"/>
                <CategoriaCard nome="Reparos"       nomeSvg="Chave"/>
            </Categorias>

            <Categorias>
                <CategoriaCard nome="Limpeza"       nomeSvg="Vassoura"/>
                <CategoriaCard nome="Pintura"       nomeSvg="Pintura"/>
            </Categorias>

            <Categorias>
                <CategoriaCard nome="Construcao"    nomeSvg="Construtor"/>
                <CategoriaCard nome="Frete"         nomeSvg="Reboque"/>
            </Categorias>
        </Container>

    )
}
