import React, { useState } from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";

function TaskList( {tasks, categorySelection} ) {
console.log(categorySelection)
  const tasksToDisplay = tasks.filter((task) => {
    if (categorySelection === "All") {
      return true; //    
    } else {
      return task.category === categorySelection;
    }
  });


  return ( 
    <div className="tasks">
     {tasksToDisplay.map((task) => (
          <Task key={uuid()} text={task.text} category={task.category} />))
     }
   </div>
  )
}
export default TaskList;
