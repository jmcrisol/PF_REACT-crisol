import React from 'react';
import './Item.css';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} className="imagen" />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <button classname="btnProducto" >Ver Detalles</button>

    </div>
  )
}

export default Item