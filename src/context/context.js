import React, { createContext, useState } from "react";

export const ProjectContext = createContext();
export const TaskContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      <TaskContext.Provider value={{ tasks, setTasks }}>
        {children}
      </TaskContext.Provider>
    </ProjectContext.Provider>
  );
};
