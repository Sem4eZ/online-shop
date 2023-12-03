import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={"/img/" + item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <b>{item.price}</b>
      <FaTrash className="trash_item" onClick={() => onDelete(item.id)}/>
    </div>
  );
}
