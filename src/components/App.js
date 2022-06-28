import React, { useEffect, useState } from "react";

const URL = "http://localhost:9292";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${URL}/`)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  const DisplayTasks = () => {
    console.log(data)
    // data.map((eachTask) => {
    //   return <li>{eachTask.description}</li>;
    // });
  };
  return (
    <div>
      <DisplayTasks />
    </div>
  );
};

export default App;
