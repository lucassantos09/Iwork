import { useNavigation } from "@react-navigation/native";
import React from "react";
import retornaSvg from "../../../utils/retornaSvg";
import { Bar, Container, ConteudoSvg, Contratacoes, Nome, Preco } from "./styles";



export default function ColaboradorCard(){

    const navigation = useNavigation();

    function navegarParaDetalhesColaborador() {
        navigation.navigate('Detalhes' as never, {
        } as never);
    }

    

     return(
         <Container onPress={navegarParaDetalhesColaborador }>
                    <ConteudoSvg>
                           {retornaSvg("Trabalhador1" , 70 , 70)}
                    </ConteudoSvg>
                   <Nome>
                       Leandro Almeida
                   </Nome>
                   <Preco>
                      R$50/hora
                   </Preco>
                   <Bar></Bar>
                   <Contratacoes>
                        378 contratações
                   </Contratacoes>
         </Container>


     )
}