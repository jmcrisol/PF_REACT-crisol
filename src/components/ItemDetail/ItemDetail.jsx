import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { useContext } from 'react'


const ItemDetail = ({ id, nombre, precio, img, categoria, descripcion, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

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
                { agregarCantidad > 0 ? (
                <>  
                <Link to="/cart" className="btn btn-success btnProducto m-1"> Terminar compra </Link>
                <Link to='/' className="btn btn-secondary btnProducto m-1"> Seguir comprando </Link>
                </>
                ) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
                
              
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