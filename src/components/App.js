
import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import TaskList from "./TaskList";

console.log(blogData);

function App() {
  const categories = ["All", ...new Set(blogData.tasks.map(task => task.category))];

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      <TaskList tasks={blogData.tasks} categories={categories} />
    </div>
  );
}

export default App;
