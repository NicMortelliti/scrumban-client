import React, {useEffect, useState} from 'react';
import { Grommet } from 'grommet';
import NavBar from './NavBar';
import Board from './Board';

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

  useEffect(() => {
    fetch(`${URL}/`)
      .then((r) => r.json())
      .then((data) => setTasks(data))
  },[])

  return (
    <Grommet theme={theme} full>
      <NavBar />
      <Board tasks={tasks} />
    </Grommet>
  );
}

export default App;
