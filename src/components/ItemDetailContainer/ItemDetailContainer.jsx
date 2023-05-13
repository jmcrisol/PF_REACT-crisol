import React from 'react'
import "./ItemDetailContainer.css"
import { useState, useEffect } from "react";
//import {getProductsById} from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { db } from '../../services/firebase/config';
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const {itemId} = useParams()

  useEffect (()=>{

    const nuevoDoc = doc(db, "productos", itemId);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data(); 
                const nuevoProducto = {id: res.id, ...data}
                setProduct(nuevoProducto);
            })

      .catch(error=>{ console.error(error) })
  },[itemId])

  return (
    <div className='m-5'>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer