import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, precio, img, categoria, descripcion, stock }) => {
  return (
    <div>
        <div className="container">
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={img} alt={nombre} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">
                    <p>ID: {id}</p>
                    <p>Categoría: {categoria}</p> 
                    <p>Precio: {precio} </p>
                    <p>Descripción: {descripcion} </p>
                </p>
                <ItemCount stock={stock} inicial={1}  onAdd={(cantidad) => console.log("Agregaste ", cantidad," Productos")}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ItemDetail