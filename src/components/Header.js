import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);

  let total_sum = 0;
  orders.forEach((el) => {
    total_sum += Number.parseFloat(el.price);
  });
  return (
    <header>
      <div className="header">
        <div>
          <span className="logo">Ikeo Shop</span>
        </div>
        <ul className="nav">
          <FaCartArrowDown
            onClick={() => setCartOpen(!cartOpen)}
            className={`shop ${cartOpen ? "active" : ""}`}
          />
          {cartOpen && (
            <div className="shop_cart">
              {orders.length > 0 ? (
                <>
                  {orders.map((el) => (
                    <Order onDelete={onDelete} key={el.id} item={el} />
                  ))}
                  <div className="total_price">Общая сумма: {new Intl.NumberFormat().format(total_sum)}$</div>
                </>
              ) : (
                <div className="empty_card">
                  Корзина пуста, добавьте товары!
                </div>
              )}
            </div>
          )}
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Акции</li>
        </ul>
      </div>

      <div className="presentation"></div>
    </header>
  );
}
