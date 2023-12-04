import React, { useState } from "react";

export default function Categories({ chooseCategory }) {
  const [categories, setCategories] = useState([
    {
      key: "all",
      name: "Всё",
    },
    {
      key: "chairs",
      name: "Стулья",
    },
    {
      key: "sofas",
      name: "Диваны",
    },
    {
      key: "tables",
      name: "Столы",
    },
    {
      key: "wardrobes",
      name: "Шкафы",
    },
    {
      key: "beds",
      name: "Кровати",
    },
    {
      key: "shelves",
      name: "Стеллажи",
    },
    {
      key: "stands",
      name: "Тумбы",
    },
    {
      key: "dressers",
      name: "Комоды",
    },
  ]);

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
