import React from "react";

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  const { id, name, description, dueDate, completed } = task;

  return (
    <div
      className={`task-item ${completed ? "completed" : ""}`}
      style={{ display: "flex" }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onComplete(id)}
      />
      <div className="task-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{dueDate}</p>
      </div>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
