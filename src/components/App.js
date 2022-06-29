import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const URL = "http://localhost:9292";

const App = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  // Fetch data from server
  useEffect(() => {
    [
      {
        category: "/",
        setter: setData,
      },
      {
        category: "/users",
        setter: setUsers,
      },
      {
        category: "/projects",
        setter: setProjects,
      },
    ].forEach((state) => {
      fetch(`${URL}${state.category}`)
        .then((r) => r.json())
        .then((data) => state.setter(data));
    });
  }, []);

  // Display tasks
  const DisplayItems = () => {
    return (
      data &&
      data.map((eachTask) => (
        <TaskCard
          key={eachTask.id}
          task={eachTask}
          data={data}
          users={users}
          setData={setData}
          url={URL}
        />
      ))
    );
  };

  return (
    <div>
      <DisplayItems />
    </div>
  );
};

export default App;
