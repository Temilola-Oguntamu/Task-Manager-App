import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onComplete, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      
      ))}
    </div>
  );
};

export default TaskList;
