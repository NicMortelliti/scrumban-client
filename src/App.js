import React from 'react';
import { Grommet } from 'grommet';

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
      <h1>Hello, world!</h1>
    </Grommet>
  );
}

export default App;
