import React from 'react'
import "./ItemDetailContainer.css"
import { useState, useEffect } from "react";
import {getProductsById} from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {itemId} = useParams()
  const [product, setProduct] = useState(null)

  useEffect (()=>{
    getProductsById(itemId)
      .then(response=>{setProduct(response)
      })

      .catch(error=>{
        console.error(error)
      })
  },[itemId])

  return (
    <div className='m-5'>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer