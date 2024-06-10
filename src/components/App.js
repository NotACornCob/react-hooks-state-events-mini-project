import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import { v4 as uuid } from "uuid";

function App() {
const [category, selectedCategory] = useState("All");
const [newTask, setNewTask] = useState("");
const [submittedCategory, setSubmittedCategory] = useState("code")
const [submittedData, setSubmittedData] = useState([])

function handleSubmit(e) {
  e.preventDefault();
  const formData = {key: uuid(),
  category: {submittedCategory},
  text: {newTask},
  };
  console.log("I'm Submitted")
  console.log(formData)
  const newDataArray = [...submittedData, formData]
  console.log(newDataArray)
  setSubmittedData([newDataArray]);
}

function handleNewTaskChange(e) {
  setNewTask(e.target.value)
}

function handleSubmittedCategory(e) {
  setSubmittedCategory(e.target.value);
}

  function categoryHandler(e) {
    selectedCategory(e.target.value);
    console.log(category);
    return (category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={categoryHandler} categoryClass={category}/>
      <NewTaskForm categories={CATEGORIES} tasks={TASKS} onTaskFormSubmit={handleSubmit} handleSubmittedCategory={handleSubmittedCategory} handleNewTaskChange={handleNewTaskChange} newTask={newTask}  />
      <TaskList categorySelection={category} tasks={TASKS} index={TASKS.index} submittedData={submittedData} />
    </div>
  );
}

export default App;
