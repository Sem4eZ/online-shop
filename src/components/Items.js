import React from "react";
import Item from "./Item";
import { useState } from "react";

const Items = ({onAdd}) => {
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
  ]);

  return (
    <div className="items">
      {items.map((elem) => (
        <Item key={elem.id} item={elem} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Items;