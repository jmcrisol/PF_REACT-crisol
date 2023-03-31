import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

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
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
