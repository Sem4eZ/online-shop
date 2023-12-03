import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Items />
      <Footer />
    </div>
  );
}
