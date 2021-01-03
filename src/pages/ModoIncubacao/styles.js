import styled from 'styled-components/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerRadio = styled(View)`
`;

export const Desc = styled(Text)`
  margin: 20px;
  padding: 10px;
  font-size: 18px;
  border-width: 1px;
  border-radius: 5px;
`;

export const Label = styled(Text)`
  font-size: 20px;
  margin-bottom: 6px;
`;

export const Radio = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
`;
