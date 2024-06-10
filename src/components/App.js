import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
const [category, selectedCategory] = useState("All");

  function categoryHandler(e) {
    selectedCategory(e.target.value);
    console.log(category);
    return (category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={categoryHandler} categoryClass={category}/>
      <NewTaskForm categories={CATEGORIES} />
      <TaskList categorySelection={category} tasks={TASKS} index={TASKS.index} />
    </div>
  );
}

export default App;
