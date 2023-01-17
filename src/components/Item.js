import React, { useState } from "react";

function Item({ name, category }) {

  const [cart,setCartClass] =useState("")

  function updateCartClass(){
    setCartClass(cart => !cart)
  }

  if(!cart){
    return(
      <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={updateCartClass} className="add">Add to Cart</button>
    </li>
    )
  }
  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={updateCartClass} className="remove">Remove from Cart</button>
    </li>
  );
}

export default Item;
