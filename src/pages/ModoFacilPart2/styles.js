import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const Desc = styled(Text)`
  margin: 20px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const Item = styled(Text)`
  font-size: 12px;
  text-align: left;
`;
