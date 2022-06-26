import React, { useState } from "react";

const EditOpenContext = React.createContext();

function EditOpenProvider({ children }) {
  const [editOpen, setEditOpen] = useState("");
  return (
    <EditOpenContext.Provider value={{ editOpen, setEditOpen }}>
      {children}
    </EditOpenContext.Provider>
  );
}

export { EditOpenContext, EditOpenProvider };
