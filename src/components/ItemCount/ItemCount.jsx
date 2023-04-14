import React from 'react'
import "./ItemCount.css"
import { useState } from "react";

const ItemCount = ({stock,inicial,onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial);

const aumenta = () => {
    if(cantidad < stock){
        setCantidad(cantidad+1)
    }
}
const disminuye = () => {
    if(cantidad > 1){
        setCantidad(cantidad-1)
    }
}



return(
    <div className="Contador my-2">
        <div className='Controles'>
            <button className='Button btn btn-primary' onClick={disminuye}>-</button>
            <h4 className='Numero'>{cantidad}</h4>
            <button className='Button btn btn-primary' onClick={aumenta}>+</button>
        </div>
        <div className='botonAgregar'>
            <button className='btn-agregar mt-4 btn btn-primary' onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito
            </button>
        </div>
    </div>
    

)

}

export default ItemCount