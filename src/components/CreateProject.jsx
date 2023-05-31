import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/context";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const { projects, setProjects } = useContext(ProjectContext);

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (projectName.trim() === "") {
      return null;
    }

    const newProject = {
      id: Date.now(),
      name: projectName.trim(),
    };

    setProjects([...projects, newProject]);
    setProjectName("");
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleCreateProject}>
        <input
          type="text"
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProject;
