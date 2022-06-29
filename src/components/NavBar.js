import React from "react";

function NavBar({ handleOpen }) {
  return <button onClick={(e) => handleOpen(e)}>New Task</button>;
}

export default NavBar;
