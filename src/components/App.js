import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const URL = "http://localhost:9292";

const App = () => {
  const [data, setData] = useState();

  // Fetch data from server
  useEffect(() => {
    fetch(`${URL}/`)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  // Display tasks
  const DisplayItems = () => {
    return (
      data &&
      data.map((eachTask) => <TaskCard key={eachTask.id} task={eachTask} data={data} setData={setData} />)
    );
  };

  return (
    <div>
      <DisplayItems />
    </div>
  );
};

export default App;
