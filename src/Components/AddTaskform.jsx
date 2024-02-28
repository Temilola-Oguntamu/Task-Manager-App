import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter a task name.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    if (dueDate < currentDate) {
      setError("Please select a future due date.");
      return;
    }
    setError("");
    onAddTask({ name, description, dueDate });
    setName("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
