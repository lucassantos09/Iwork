import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import retornaSvg from "../../utils/retornaSvg";
import { BotaoVoltar, Container, ConteudoPesquisa, Header, InfoInput, InputPesquisa, TextoPesquisa, Titulo } from "./styles";

export default function Pesquisar() {


    const navigation = useNavigation();


    function voltar() {
        navigation.goBack();
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <Container>
                <Header>
                    <BotaoVoltar
                        onPress={() => voltar()}
                    >
                        {retornaSvg("ArrowLeft", 30, 30)}

                    </BotaoVoltar>

                    <TextoPesquisa>
                        Pesquisa
                    </TextoPesquisa>
                </Header>

                <ConteudoPesquisa>
                    <InfoInput>
                        <Fontisto name="search" size={20} color="black" />
                        <Titulo>Procure Por Nome</Titulo>
                    </InfoInput>
                    <InputPesquisa />
                </ConteudoPesquisa>



            </Container>
        </TouchableWithoutFeedback>

    )
}
