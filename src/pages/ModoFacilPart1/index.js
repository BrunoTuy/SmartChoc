import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

import { Container, Desc } from './styles';

const options = [
  {key: 'galinha', label: 'Galinha'},
  {key: 'codorna', label: 'Codorna'},
  {key: 'galinhaangola', label: 'Galinha da Angola'}
];

const ModoFacil1 = ({ navigation }) => (
  <Container>
    <Desc>Selecione a ave desejada</Desc>
    <RadioButton options={options} />
    <Button 
      text="Prosseguir"
      onPress={() => navigation.navigate('ModoFacilPart2')}
    />
  </Container>
);

ModoFacil1.navigationOptions = { title: "Modo Fácil" };

export default ModoFacil1;
