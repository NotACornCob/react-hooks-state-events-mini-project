import React from "react";

function CategoryFilter({categories, selectedCategory, categoryClass}) {


  const buttons = categories.map((category) => (
  <button key={category} id={category} value={category} onClick={selectedCategory} text={category.text} className={categoryClass === category ? "selected" : ""}>{category}</button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
