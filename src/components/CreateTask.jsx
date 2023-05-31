import React, { useContext, useState } from "react";
import { ProjectContext, TaskContext } from "../context/context";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");
  const { projects } = useContext(ProjectContext);
  const { tasks, setTasks } = useContext(TaskContext);

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === "" || timeSpent.trim() === "") {
      return null;
    }

    const newTask = {
      id: Date.now(),
      projectName: taskName.trim(),
      timeSpent: parseFloat(timeSpent.trim()),
      description: description.trim(),
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setTimeSpent("");
    setDescription("");
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <select value={taskName} onChange={(e) => setTaskName(e.target.value)}>
          <option value="">Select a Project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time spent (hours)"
          value={timeSpent}
          onChange={(e) => setTimeSpent(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
