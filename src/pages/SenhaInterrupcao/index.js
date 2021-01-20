import React from 'react';

import Button from '../../components/Button'

import { Container, ContainerInput, Title, Desc, Label, Input } from './styles';

const SenhaInterrupcao = ({ navigation }) => (
  <Container>
    <Title>Tempo de incubação 21 dias</Title>
    <ContainerInput>
      <Label>Digite a senha de interrupção do ciclo</Label>
      <Input placeholder="Digite aqui" />
    </ContainerInput>
    <ContainerInput>
      <Label>Confirme a senha de interrupção do ciclo</Label>
      <Input placeholder="Digite aqui" />
    </ContainerInput>
    <Label>Senha de interrupção é necessario caso tenha algum problema de confirmação ou precise interromper o ciclo. Isso só sera feito mediante a senha cadastrada aqui.</Label>
    <Button 
      text="Ok"
      onPress={() => navigation.goBack()}
    />
  </Container>
);

SenhaInterrupcao.navigationOptions = { title: "Senha de interrupção" };

export default SenhaInterrupcao;
