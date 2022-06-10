import React from "react";
import retornaSvg from "../../../utils/retornaSvg";
import { Bar, Container, ConteudoSvg, Contratacoes, Nome, Preco } from "./styles";



export default function ColaboradorCard(){
     return(
         <Container>
                    <ConteudoSvg>
                           {retornaSvg("Colaborador" , 70 , 70)}
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