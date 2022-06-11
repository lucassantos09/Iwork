import { Fontisto, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { BotaoLogin, BotaoVoltar, Container, ConteudoEmail, ConteudoInput, ConteudoNome, ConteudoSenha, ConteudoTelefone, ConteudoTitulo, Header, InfoInput, InputEmail, InputSenha, TextoLogin, Titulo } from "./styles";

export default function Cadastro() {
    const [isSecure, setSecureActive] = useState<boolean>(true);




    const navigation = useNavigation();


    function voltar() {
        navigation.goBack();
    }
    
    function IrLogin() {
        navigation.navigate('Login' as never, {
        } as never);
    }

    return (
        <Container>
            <TextoLogin>
                Cadastro
            </TextoLogin>

            <ConteudoNome>
                <InfoInput>
                    <Fontisto name="person" size={20} color="black" />
                    <Titulo>Nome de usuario</Titulo>
                </InfoInput>
                <InputEmail />
            </ConteudoNome>

            <ConteudoTelefone>
                <InfoInput>
                    <Fontisto name="phone" size={20} color="black" />
                    <Titulo>Numero de Telefone</Titulo>
                </InfoInput>
                <InputEmail />
            </ConteudoTelefone>

            <ConteudoEmail>
                <InfoInput>
                    <Fontisto name="email" size={20} color="black" />
                    <Titulo>Endereço de email</Titulo>
                </InfoInput>
                <InputEmail />
            </ConteudoEmail>

            <ConteudoSenha>
                <InfoInput>
                    <MaterialCommunityIcons name="lock-outline" size={20} color="black" />
                    <Titulo>Senha</Titulo>
                </InfoInput>
                <ConteudoInput>
                    <InputSenha secureTextEntry={isSecure} />
                    <Octicons name={isSecure ? "eye" : "eye-closed"} size={24} color="black" onPress={() => setSecureActive(!isSecure)} />
                </ConteudoInput>
            </ConteudoSenha>



            <BotaoLogin onPress={IrLogin}>
                <ConteudoTitulo>
                    Cadastrar
                </ConteudoTitulo>
            </BotaoLogin>


            <BotaoVoltar
                onPress={() => voltar()}
            >
                Entrar na conta
            </BotaoVoltar>


        </Container>

    )
}