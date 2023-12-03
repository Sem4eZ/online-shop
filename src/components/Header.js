import React from "react";

export default function Header() {
  return (
    <header>
      <div  className="header">
        <div>
          <span className="logo">Ikeo Shop</span>
        </div>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Корзина</li>
        </ul>
      </div>

      <div className="presentation"></div>
    </header>
  );
}
