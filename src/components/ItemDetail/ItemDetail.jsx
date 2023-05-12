import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { useContext } from 'react'


const ItemDetail = ({ id, nombre, precio, img, categoria, descripcion, stock }) => {

  //1) Creamos un estado con la cantidad de productos agregados. 

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ////////////////// useContext - clase 11
  const {agregarProducto} = useContext(CarritoContext);

  ///////////////// useContext

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div>
        <div className="container">
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={img} alt={nombre} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <div className="card-text">
                    <p>ID: {id}</p>
                    <p>Categoría: {categoria}</p> 
                    <p>Precio: {precio} </p>
                    <p>Stock: {stock}</p>
                    <p>Descripción: {descripcion} </p>
                </div>
                { agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
              
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ItemDetail


{
  //<ItemCount stock={stock} inicial={1}  onAdd={(cantidad) => console.log("Agregaste ", cantidad," Productos")}/>
}