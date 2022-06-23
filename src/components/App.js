import React, {useEffect, useState} from 'react';
import { Grommet } from 'grommet';
import NavBar from './NavBar';

// Set server URL
const URL = `${process.env.REACT_APP_API_URL}`;

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
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])

  return (
    <Grommet theme={theme} full>
      <NavBar />
    </Grommet>
  );
}

export default App;
