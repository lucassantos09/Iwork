import React, { useState } from "react";
import { BotaoLogin, Container, ConteudoBotao, ConteudoEmail, ConteudoInput, ConteudoLogin, ConteudoSenha, ConteudoSVG, ConteudoTitulo, CriarConta, Header, InfoInput, InputEmail, InputSenha, TextoLogin, Titulo, TituloTrabalheConosco, TrabalheConosco } from "./styles";
import { Image, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Octicons } from '@expo/vector-icons';
import ImagemMulher from '../../assets/images/imagem-mulher.svg';
import KeyboardListener from 'react-native-keyboard-listener';


export default function Login() {

    const [isKeyboardActive, setKeyboardActive] = useState<boolean>();
    const [isSecure, setSecureActive] = useState<boolean>(true);

    const navigation = useNavigation();


    function navegarParaCadastro() {
        navigation.navigate('Cadastro' as never, {
        } as never);
    }

    function navegarParaHome() {
        navigation.navigate('Home' as never, {
        } as never);
    }

    function navegarParaColaboradores() {
        navigation.navigate('Colaboradores' as never, {
        } as never);
    }

    function navegarParaPesquisar() {
        navigation.navigate('Pesquisar' as never, {
        } as never);
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={2}>
                <Container scrollEnabled={isKeyboardActive}>
                    <KeyboardListener onWillShow={() => setKeyboardActive(true)}
                        onWillHide={() => setKeyboardActive(false)}
                    />
                    <ConteudoLogin>
                        <Header>
                            <TrabalheConosco>
                                <TituloTrabalheConosco>
                                    Venha trabalhar conosco!
                                </TituloTrabalheConosco>

                                <ConteudoSVG>
                                    <ImagemMulher />
                                </ConteudoSVG>
                            </TrabalheConosco>
                        </Header>
                        <TextoLogin>
                            Login
                        </TextoLogin>
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
                                <Octicons name={isSecure ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setSecureActive(!isSecure)} />
                            </ConteudoInput>
                        </ConteudoSenha>

                        <ConteudoBotao>
                            <BotaoLogin
                                onPress={() => navegarParaPesquisar()}>
                                <ConteudoTitulo>
                                    Login
                                </ConteudoTitulo>

                            </BotaoLogin>

                            <CriarConta

                                onPress={() => navegarParaCadastro()}>
                                Criar Conta

                            </CriarConta>
                        </ConteudoBotao>
                    </ConteudoLogin>

                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

    )

}
