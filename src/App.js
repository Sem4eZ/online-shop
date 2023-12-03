import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

export default function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

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

  return (
    <div className="wrapper">
      <Header orders={orders} />
      <Items onAdd={addToOrder} />
      <Footer />
    </div>
  );
}
