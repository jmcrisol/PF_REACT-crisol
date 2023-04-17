import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductsByCategory : getProducts

    asyncFunc(categoriaId)
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, [categoriaId])

  return (
    <div className="container">
      <h2 className="m-5">Catálogo de Productos</h2>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
