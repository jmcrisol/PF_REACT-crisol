import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <>
    <a id="carrito" href="#">
        <i  className="bi bi-cart4"/><span id="cantidad" className="position-relative top-0 start-40 translate-middle badge rounded-pill bg-danger">10</span>
    </a>
    
    
    </>
  )
}

export default CartWidget