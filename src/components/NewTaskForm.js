import React from "react";

function NewTaskForm({categories}) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
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
