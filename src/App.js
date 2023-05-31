import React from "react";
import CreateProject from "./components/CreateProject";
import CreateTask from "./components/CreateTask";
import DailySummary from "./components/DailySummary";
import { AppContextProvider } from "./context/context";

const App = () => {
  return (
    <AppContextProvider>
      <CreateProject />
      <CreateTask />
      <DailySummary />
    </AppContextProvider>
  );
};

export default App;
