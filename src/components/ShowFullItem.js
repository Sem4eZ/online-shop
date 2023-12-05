import React from "react";

export default function ShowFullItem({ item, onClose }) {
  if (!item || !item.img) {
    return <div>Некорректные данные товара</div>;
  }

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="item modal_item" onClick={(e) => e.stopPropagation()}>
        <span className="modal_close" onClick={onClose}>
          &times;
        </span>
        <img src={"/img/" + item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}</b>
      </div>
    </div>
  );
}
