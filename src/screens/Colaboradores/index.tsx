import React from "react";
import { BotaoVoltar, CardLista, Container,Elogio,Header,Titulo } from "./styles";
import ColaboradorCard from "../../assets/components/ColaboradorCard";
import retornaSvg from "../../utils/retornaSvg";
import { ScrollView } from "react-native";
export default function Colaboradores(){

    return (  
        <ScrollView>

           <Container>       
                    <Header>
                            <BotaoVoltar>
                                 {retornaSvg("ArrowLeft" , 30 , 30)}
                            </BotaoVoltar>
                            <Titulo>
                                Encanadores                    
                            </Titulo>
                    </Header>

                    
                    <Elogio>
                        Melhor Encanadores da comunidade
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