import React from "react";
import Item from "./Item";
import { useState } from "react";
import Categories from "./Categories";

const Items = ({ onAdd, items }) => {


  return (
    <div className="items">
      {items.map((elem) => (
        <Item key={elem.id} item={elem} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Items;
