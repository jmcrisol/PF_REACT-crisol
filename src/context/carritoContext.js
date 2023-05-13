import React from "react";
import { useState, createContext } from "react";

export const CarritoContext = createContext({carrito:[]});

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item, cantidad) => {
        if(!verificarItem(item.id)){
            setCarrito(prev => [...prev, {item, cantidad}])
        }
        else {
            console.log("producto ya agregado")
        }
    }
    
    const removeItem = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const verificarItem = (id) => {
        return carrito.some(prod => prod.id === id);
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarProducto, removeItem, vaciarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )

}
