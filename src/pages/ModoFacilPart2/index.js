import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

import { Container, Desc, Item } from './styles';

const ModoFacil2 = () => (
  <Container>
    <View>
      <Desc>Ave selecionada: Galinha</Desc>
      <Item>Tempo de incubação 21 dias</Item>
      <Item>Temperatura de pré aquecimento de 4horas - 32⁰C</Item>
      <Item>Dia 1⁰ ao 14⁰ temperatura de 37,2⁰C Umidade 56%</Item>
      <Item>Dia 15⁰ ao 18⁰ temperatura de 37,6⁰C Umidade 65%</Item>
      <Item>Dia 19⁰ ao 21⁰ temperatura de 36,5⁰C Umidade 65%</Item>
      <Item>Inicio dia xx término dia xx</Item>
    </View>
    <View>
      <Button
        text="Senha"
        onPress={() => alert('ir senha')}
      />
      <Button
        text="Concluir"
        onPress={() => alert('ir concluir')}
      />
    </View>
  </Container>
);

ModoFacil2.navigationOptions = { title: "Modo Fácil" };

export default ModoFacil2;
