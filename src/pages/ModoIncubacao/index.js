import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

import { Container, Desc } from './styles';

const options = [
  {key: 'facil', label: 'Fácil'},
  {key: 'personalizada', label: 'Personalizada'}
];

const ModoIncubacao = ({ navigation }) => (
  <Container>
    <Desc>Selecione o modo de incubação desejada!</Desc>
    <RadioButton options={options} />
    <Button 
      text="Prosseguir"
      onPress={() => navigation.navigate('ModoFacilPart1')}
    />
  </Container>
);

ModoIncubacao.navigationOptions = { title: "Modos de incubação" };

export default ModoIncubacao;
