import React, { useContext } from "react";
import { TaskContext } from "../context/context";

const DailySummary = () => {
  const { tasks } = useContext(TaskContext);
  const totalHours = tasks.reduce((total, task) => total + task.timeSpent, 0);

  return (
    <div>
      <h2>Daily Summary</h2>
      <p>Total hours: {totalHours}</p>
    </div>
  );
};

export default DailySummary;
