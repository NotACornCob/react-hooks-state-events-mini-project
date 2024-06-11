import React, { useState } from "react";

function NewTaskForm({categories, 
  tasks, 
  handleNewTaskChange, 
  handleSubmittedCategory, 
  onTaskFormSubmit, 
  newTask,
  submittedCategory,
  }) {

  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTaskChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSubmittedCategory} value="submittedCategory">
        <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>  
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
