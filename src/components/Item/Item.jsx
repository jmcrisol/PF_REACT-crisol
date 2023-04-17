import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";


const Item = ({ id, nombre, precio, img, categoria, descripcion, stock  }) => {
  return (
    <div className="">
      <div className="card mb-5" style={{ width: "18rem" }}>
        <img src={img} alt={nombre} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            ID: {id}
            <p>Precio: {precio} </p>
          </p>
          <Link to={`/item/${id}`} className="btn btn-dark btnProducto">Ver Detalles</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Item;
