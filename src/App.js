import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Стул серый",
      img: "chair-grey.jpeg",
      desc: "Комфортабельный серый стул для современного интерьера.",
      category: "chairs",
      price: "49.99$",
    },
    {
      id: 2,
      title: "Диван угловой",
      img: "sofa-corner.jpeg",
      desc: "Угловой диван для уютного пространства отдыха в вашей гостиной.",
      category: "sofas",
      price: "299.99$",
    },
    {
      id: 3,
      title: "Стол обеденный",
      img: "dining-table.jpeg",
      desc: "Стильный обеденный стол для семейных посиделок и ужинов.",
      category: "tables",
      price: "129.99$",
    },
    {
      id: 4,
      title: "Шкаф для одежды",
      img: "wardrobe.jpeg",
      desc: "Просторный шкаф для хранения вашей одежды и аксессуаров.",
      category: "wardrobes",
      price: "199.99$",
    },
    {
      id: 5,
      title: "Кровать двуспальная",
      img: "double-bed.jpeg",
      desc: "Удобная двуспальная кровать для спокойного сна.",
      category: "beds",
      price: "449.99$",
    },
    {
      id: 6,
      title: "Стеллаж для книг",
      img: "bookshelf.jpeg",
      desc: "Современный стеллаж для организации вашей домашней библиотеки.",
      category: "shelves",
      price: "79.99$",
    },
    {
      id: 7,
      title: "Кухонный стол",
      img: "kitchen-table.jpeg",
      desc: "Практичный кухонный стол для приятных завтраков и обедов.",
      category: "tables",
      price: "159.99$",
    },
    {
      id: 8,
      title: "Кресло мягкое",
      img: "soft-armchair.jpeg",
      desc: "Мягкое кресло для уюта и отдыха в вашем интерьере.",
      category: "chairs",
      price: "89.99$",
    },
    {
      id: 9,
      title: "Тумба под телевизор",
      img: "tv-stand.jpeg",
      desc: "Стильная тумба под телевизор для организации развлекательного центра.",
      category: "stands",
      price: "109.99$",
    },
    {
      id: 10,
      title: "Комод для белья",
      img: "dresser.jpeg",
      desc: "Практичный комод для хранения белья и личных вещей.",
      category: "dressers",
      price: "139.99$",
    },
    {
      id: 11,
      title: "Стул серый",
      img: "chair-grey.jpeg",
      desc: "Комфортабельный серый стул для современного интерьера.",
      category: "chairs",
      price: "49.99$",
    },
    {
      id: 12,
      title: "Диван угловой",
      img: "sofa-corner.jpeg",
      desc: "Угловой диван для уютного пространства отдыха в вашей гостиной.",
      category: "sofas",
      price: "299.99$",
    },
    {
      id: 13,
      title: "Стол обеденный",
      img: "dining-table.jpeg",
      desc: "Стильный обеденный стол для семейных посиделок и ужинов.",
      category: "tables",
      price: "129.99$",
    },
    {
      id: 14,
      title: "Шкаф для одежды",
      img: "wardrobe.jpeg",
      desc: "Просторный шкаф для хранения вашей одежды и аксессуаров.",
      category: "wardrobes",
      price: "199.99$",
    },
    {
      id: 15,
      title: "Кровать двуспальная",
      img: "double-bed.jpeg",
      desc: "Удобная двуспальная кровать для спокойного сна.",
      category: "beds",
      price: "449.99$",
    },
    {
      id: 16,
      title: "Стеллаж для книг",
      img: "bookshelf.jpeg",
      desc: "Современный стеллаж для организации вашей домашней библиотеки.",
      category: "shelves",
      price: "79.99$",
    },
    {
      id: 17,
      title: "Кухонный стол",
      img: "kitchen-table.jpeg",
      desc: "Практичный кухонный стол для приятных завтраков и обедов.",
      category: "tables",
      price: "159.99$",
    },
    {
      id: 18,
      title: "Кресло мягкое",
      img: "soft-armchair.jpeg",
      desc: "Мягкое кресло для уюта и отдыха в вашем интерьере.",
      category: "chairs",
      price: "89.99$",
    },
    {
      id: 19,
      title: "Тумба под телевизор",
      img: "tv-stand.jpeg",
      desc: "Стильная тумба под телевизор для организации развлекательного центра.",
      category: "stands",
      price: "109.99$",
    },
    {
      id: 20,
      title: "Комод для белья",
      img: "dresser.jpeg",
      desc: "Практичный комод для хранения белья и личных вещей.",
      category: "dressers",
      price: "139.99$",
    },
  ]);
  const [currentItems, setCurrentItems] = useState([...items]);

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

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems([...items]);
    } else {
      setCurrentItems(items.filter((el) => el.category === category));
    }
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(true);
  };

  const onCloseModal = () => {
    setShowFullItem(false);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem item={fullItem} onClose={onCloseModal} />}
      <Footer />
    </div>
  );
}
