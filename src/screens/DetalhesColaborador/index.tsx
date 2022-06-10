import React from "react";
import { BotaoVoltar, Container, Header, InfoColaborador, Titulo } from "./styles";
import ColaboradorCard from "../../assets/components/ColaboradorCard";
import retornaSvg from "../../utils/retornaSvg";

export default function DetalhesColaborador() {

    return (

        <Container>
            <Header>
                <BotaoVoltar>
                    {retornaSvg("ArrowLeft", 30, 30)}
                </BotaoVoltar>
                <Titulo>
                    Detalhes
                </Titulo>
            </Header>

            <InfoColaborador>
                <Titulo>Ola mundo</Titulo>
            </InfoColaborador>



        </Container>

    )
}