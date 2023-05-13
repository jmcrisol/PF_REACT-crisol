import React from "react";
import { useState, useEffect } from "react";
//import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {collection, getDocs, where, query} from "firebase/firestore";
import { db } from "../../services/firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {
    const misProductos = categoriaId ? query(collection(db, "productos"), where("categoria", "==", categoriaId)) : collection(db, "productos");
    
    getDocs(misProductos)
            .then(res=> {
                const nuevosProductos = res.docs.map( doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProducts(nuevosProductos);
            })
            .catch(error => console.log(error))

  }, [categoriaId])

  return (
    <div className="container">
      <h2 className="m-5">Catálogo de Productos</h2>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;




  /*const asyncFunc = categoriaId ? getProductsByCategory : getProducts

  asyncFunc(categoriaId)
  .then((response) => setProducts(response))
  .catch((error) => console.error(error));*/
  