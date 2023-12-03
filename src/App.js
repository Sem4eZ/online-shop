import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

export default function App() {
  const [orders, setOrders] = useState([]);

  const addToOrder = (itemToCart) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === itemToCart.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders((prevOrders) => [...prevOrders, itemToCart]);
    }
  };

  const deleteOrder = (id) => {
    setOrders((orders) => orders.filter((el) => el.id !== id));
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Items onAdd={addToOrder} />
      <Footer />
    </div>
  );
}
