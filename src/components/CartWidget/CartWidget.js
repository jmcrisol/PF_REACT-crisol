import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <>
      <Link id="carrito" to='/cart'>
        <i className="bi bi-cart4" />
        <span
          id="cantidad"
          className="position-relative top-0 start-40 translate-middle badge rounded-pill bg-danger"
        >
          {totalCantidad}
        </span>
      </Link>
    </>
  );
};

export default CartWidget;
