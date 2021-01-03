import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import Button from '../../components/Button'

import { Container, ContainerRadio, Radio, Title, Desc, Label, Input } from './styles';

const options = [
  {key: 'facil', label: 'Fácil'},
  {key: 'personalizada', label: 'Personalizada'}
];

const Welcome = () => {
  const [modo, setModo] = useState(null);

  return (
    <Container>
      <Desc>Selecione o modo de incubação desejada!</Desc>
      <ContainerRadio>
        {options.map(i => (
          <Radio onPress={() => setModo(i.key)}>
            <RadioButton
              value={i.key}
              onPress={() => setModo(i.key)}
              status={modo === i.key ? 'checked' : 'unchecked'}
            />
            <Text>{i.label}</Text>
          </Radio>
        ))}
      </ContainerRadio>
      <Button 
        text="Prosseguir"
        onPress={() => alert('enviar')}
      />
    </Container>
  );
}

Welcome.navigationOptions = { title: "Modos de incubação" };

export default Welcome;
