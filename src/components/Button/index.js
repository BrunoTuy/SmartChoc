import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import { ButtonStyled, TextStyled } from './styles';

export default ({ text, onPress, style, primary, loading }) => (
  <ButtonStyled
    style={style}
    primary={primary}
    onPress={!loading ? onPress : null}
  >
    {!loading && text && (
      <TextStyled primary={primary}>
        {text}
      </TextStyled>
    )}
    {loading && (
      <ActivityIndicator
        animating
        size="small"
        color={primary ? '#ffffff' : '#000000'}
      />
    )}
  </ButtonStyled>
);
