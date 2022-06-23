import React from 'react';
import { Grommet } from 'grommet';
import NavBar from './NavBar';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <NavBar />
    </Grommet>
  );
}

export default App;
