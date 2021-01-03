import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

import { Container, Desc } from './styles';

const options = [
  {key: 'facil', label: 'Fácil'},
  {key: 'personalizada', label: 'Personalizada'}
];

const Welcome = () => {
  const [modo, setModo] = useState(null);

  return (
    <Container>
      <Desc>Selecione o modo de incubação desejada!</Desc>
      <RadioButton options={options} />
      <Button 
        text="Prosseguir"
        onPress={() => alert('enviar')}
      />
    </Container>
  );
}

Welcome.navigationOptions = { title: "Modos de incubação" };

export default Welcome;
