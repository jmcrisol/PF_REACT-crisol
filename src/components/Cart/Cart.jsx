import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    //Calculamos la cantidad total de productos en el carrito. 
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    //Calculamos el precio total de los productos en el carrito.
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <div className="m-5">
                <h2>No hay productos en el carrito </h2>
                <Link to='/' className="btn btn-primary btnProducto"> Seguir comprando </Link>

            </div>
        )
    }

    return (
        <div className="m-5">
            <h1>Detalle de tu carrito de compras</h1>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <button onClick={() => vaciarCarrito()} className="btn btn-danger btnProducto m-1"> Vaciar Carrito </button>
            <Link to='/checkout' className="btn btn-success btnProducto m-1"> Finalizar Compra </Link>
        </div>
    )
 
}

export default Cart
