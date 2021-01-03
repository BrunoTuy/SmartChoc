import React from 'react';

import Button from '../../components/Button'

import { Container, ContainerInput, Title, Desc, Label, Input } from './styles';

const Welcome = ({ navigation }) => (
  <Container>
    <Title>Bem Vindo a SmartChoc</Title>
    <Desc>Digite o código que vem na sua chocadeira para fazer a sincronização desejada!</Desc>
    <ContainerInput>
      <Label>Código</Label>
      <Input placeholder="Digite aqui" />
      <Button 
        text="Ok"
        onPress={() => navigation.navigate("ModoIncubacao")}
      />
    </ContainerInput>
  </Container>
);

Welcome.navigationOptions = { headerShown: false };

export default Welcome;
