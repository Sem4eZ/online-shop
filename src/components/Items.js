import React from "react";
import Item from "./Item";

const Items = ({ onAdd, items, onShowItem }) => {


  return (
    <div className="items">
      {items.map((elem) => (
        <Item  onShowItem={onShowItem} key={elem.id} item={elem} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Items;
