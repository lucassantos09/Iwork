import React from "react";
import { BotaoVoltar, CardLista, Container,Elogio,Header,Titulo } from "./styles";
import ColaboradorCard from "../../assets/components/ColaboradorCard";
import retornaSvg from "../../utils/retornaSvg";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Colaboradores(){
    const navigation = useNavigation();


    function voltar() {
        navigation.goBack();
    }

    return (  
        <ScrollView>

           <Container>       
                    <Header>
                            <BotaoVoltar onPress={voltar }>
                                 {retornaSvg("ArrowLeft" , 30 , 30)}
                            </BotaoVoltar>
                            <Titulo>
                                Encanadores                    
                            </Titulo>
                    </Header>

                    
                    <Elogio>
                        Melhores Encanadores da Comunidade
                    </Elogio>
                    <CardLista>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                        <ColaboradorCard/>
                    </CardLista>
                             
            </Container>
        </ScrollView>
    )
}