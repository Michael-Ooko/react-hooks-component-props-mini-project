
import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList({ tasks, categories }) {
  const [taskList, setTaskList] = useState(tasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskId) => {
    const updatedTasks = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const filteredTasks = selectedCategory === "All"
    ? taskList
    : taskList.filter(task => task.category === selectedCategory);

  return (
    <div>
      <div>
        {categories.map(category => (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <TaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
