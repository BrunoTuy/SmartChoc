import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Desc = styled(Text)`
  margin: 20px;
  padding: 10px;
  font-size: 18px;
  border-width: 1px;
  border-radius: 5px;
`;
