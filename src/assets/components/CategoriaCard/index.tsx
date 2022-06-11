import { useNavigation } from "@react-navigation/native";
import React from "react"
import DetalhesColaborador from "../../../screens/DetalhesColaborador";
import retornaSvg from "../../../utils/retornaSvg";
import { CategoriaImagem, Container, ConteudoNomeCategoria, ConteudoSvg, NomeCategoria } from "./styles"

interface CardProps {
    nome: string,
    nomeSvg: string,
    largura?: number,
    altura?: number
}

export default function CategoriaCard(Categoria: CardProps) {

    const navigation = useNavigation();

    function navegarParaColaboradores() {
        navigation.navigate('Colaboradores' as never, {
        } as never);
    }

    return (
        <Container onPress={navegarParaColaboradores } >

            <ConteudoSvg>
                {retornaSvg(Categoria.nomeSvg, Categoria.largura, Categoria.altura)}
            </ConteudoSvg>

            <ConteudoNomeCategoria>
                <NomeCategoria>
                    {Categoria.nome}
                </NomeCategoria>
            </ConteudoNomeCategoria>
        </Container>
    )
}