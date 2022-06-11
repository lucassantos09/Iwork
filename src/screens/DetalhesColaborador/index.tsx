import React from "react";
import { BotaoAgendar, BotaoVoltar, Container, ConteudoBotao, ConteudoSvg, Descricao, Header, InfoColaborador, Linha, NomeDescricao, Preco, TextoDescricao, Titulo, TituloColaborador } from "./styles";
import retornaSvg from "../../utils/retornaSvg";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

export default function DetalhesColaborador() {

    const navigation = useNavigation();


    async function IrParaWpp(){
        if(await Linking.canOpenURL("https://api.whatsapp.com/send?phone=5514997653985")){

            Linking.openURL("https://api.whatsapp.com/send?phone=5514997653985")
        }
    }

    function voltar() {
        navigation.goBack();
    }
    return (
       <ScrollView>

       
        <Container>
            <Header>
                <BotaoVoltar onPress={voltar }>
                    {retornaSvg("ArrowLeft", 30, 30)}
                </BotaoVoltar>
                <Titulo>
                    Detalhes
                </Titulo>

            </Header>

            <InfoColaborador>
                <TituloColaborador>Leandro Almeida</TituloColaborador>
                <ConteudoSvg>
                    {retornaSvg("Trabalhador1", 320, 291)}
                </ConteudoSvg>
                <Linha>                   
                    <BotaoAgendar onPress={IrParaWpp}>
                        <ConteudoBotao>
                            Agendar
                        </ConteudoBotao>
                    </BotaoAgendar>
                    <Preco>R$50.00</Preco>
                </Linha>
            
            </InfoColaborador>

            <Descricao>
                <NomeDescricao>Descrição</NomeDescricao>
                <TextoDescricao>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </TextoDescricao>
            </Descricao>

        </Container>
        </ScrollView>
    )
}