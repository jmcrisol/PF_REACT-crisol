import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, nombre, precio, img }) => {
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
          <a href="#" className="btn btn-primary btnProducto">
            Ver Detalles
          </a>
          <ItemCount stock={10} inicial={1}  onAdd={(cantidad) => console.log("Agregaste ", cantidad," Productos")}/>
        </div>
      </div>
      
    </div>
  );
};

export default Item;