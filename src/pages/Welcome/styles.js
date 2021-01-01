import styled from 'styled-components/native';
import { View, Text, TextInput } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInput = styled(View)`
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 25px;
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

export const Input = styled(TextInput)`
  width: 200px;
  padding: 10px;
  border-width: 1px;
  text-align: center;
  border-radius: 5px;
`;
