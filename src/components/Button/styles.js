import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

export const ButtonStyled = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ primary }) => primary ? '#ffffff' : '#01b3fd'};
  background-color: ${({ primary }) => primary ? '#01b3fd' : '#ffffff'};
`;

export const TextStyled = styled(Text)`
  color: ${({ primary }) => primary ? '#ffffff' : '#01b3fd'};
`;
