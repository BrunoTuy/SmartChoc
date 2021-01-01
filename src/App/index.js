import React from 'react';
import { RDProvider } from './RDProvider';
import Routes from './Routes';

export default () => (
  <RDProvider>
    <Routes />
  </RDProvider>
);
