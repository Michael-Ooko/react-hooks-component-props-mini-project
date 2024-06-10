// Task.js
import React from "react";

function Task({ task, onDelete }) {
  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
