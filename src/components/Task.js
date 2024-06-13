import React, { useState } from "react";

function Task({ category, text, taskId }) {
  const [isVisible, setIsVisible] = useState(true);

  function deleteHandler() {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null; 
  }

  return (
    <div className="task" key={taskId}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteHandler}>
        X
      </button>
    </div>
  );
}

export default Task;