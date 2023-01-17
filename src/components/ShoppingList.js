import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory,setSelectedCategory]=useState("list")

  function updateCategory(e){
     setSelectedCategory(e.target.value)
  }
  const filteredlist= items.filter(newitem =>(selectedCategory==="list")? true : newitem.category===selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value="selectedCategory" onChange={e=> updateCategory(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredlist.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
