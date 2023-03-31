import React from "react";
import "./Item.css";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <div className="card mb-5" style={{ width: "18rem" }}>
        <img src={img} alt={nombre} className="" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            ID: {id}
            <p>Precio: {precio} </p>
          </p>
          <a href="#" className="btn btn-primary btnProducto">
            Ver Detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
