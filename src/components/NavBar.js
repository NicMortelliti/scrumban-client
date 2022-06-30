import React from "react";

function NavBar({ handleOpen }) {
  const items = [
    {
      label: "New Task",
      icon: "pi pi-plus",
      command: (e) => handleOpen(e),
    },
  ];

  // return <Menubar model={items} />;
}

export default NavBar;
