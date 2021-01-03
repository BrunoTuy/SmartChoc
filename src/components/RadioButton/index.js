import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

import { Container, ContainerRadio, Label } from './styles'

const _RadioButton = ({ options }) => {
  const [value, setValue] = useState(null);

  return (
    <Container>
      {(options || []).map((i, idx) => (
        <ContainerRadio key={idx} onPress={() => setValue(i)}>
          <RadioButton
            value={idx}
            onPress={() => setValue(i)}
            status={value === i ? 'checked' : 'unchecked'}
          />
          <Label>{i.label}</Label>
        </ContainerRadio>
      ))}
    </Container>
  );
}

export default _RadioButton;
