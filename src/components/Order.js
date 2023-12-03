import React from "react";

export default function Order({ item }) {
  return (
    <div className="item">
      <img src={"/img/" + item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <b>{item.price}</b>
    </div>
  );
}
