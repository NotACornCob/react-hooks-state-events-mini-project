import React, { useState } from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";

function TaskList( {tasks, categorySelection} ) {

  const tasksToDisplay = tasks.filter((item) => {
     if (categorySelection === "All") return true;
     return true;
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
