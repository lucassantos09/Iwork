import React from "react"
import retornaSvg from "../../../utils/retornaSvg";
import { CategoriaImagem, Container, ConteudoNomeCategoria, ConteudoSvg, NomeCategoria } from "./styles"




interface CardProps {
    nome: string,
    nomeSvg: string,
    largura?: number,
    altura?: number
}

export default function CategoriaCard(Categoria: CardProps) {
    return (
        <Container>
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