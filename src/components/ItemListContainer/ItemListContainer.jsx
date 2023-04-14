import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div className=""><ItemList products={products}/></div>
    </div>
  );
};

export default ItemListContainer;
