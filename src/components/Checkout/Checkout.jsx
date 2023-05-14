import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'


const Checkout = () => {
    
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
                precioUnitario: producto.item.precio,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })
    }

    return (
        <div className='m-5'>


            <h2>Checkout</h2>
            {
                ordenId && (
                    <div className='h5 p-3 bg-info bg-opacity-10 border border-info  rounded'>
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                    </div>
                )
            }
            <form onSubmit={handleSubmit}>
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $: {producto.item.precio} </p>
                        <hr />
                    </div>
                ))
                }
                <hr />
                <div className='border rounded p-5 shadow-lg'>
                <div className='col-3'>
                    <label htmlFor="" className="form-label">Nombre</label>
                    <input type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='col-3'>
                    <label htmlFor="" className="form-label">Apellido</label>
                    <input type="text" className='form-control' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className='col-3'>
                    <label htmlFor="" className="form-label">Teléfono</label>
                    <input type="text" className='form-control' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className='col-3'>
                    <label htmlFor="" className="form-label">Email </label>
                    <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='col-3'>
                    <label htmlFor="" className="form-label">Email Confirmación</label>
                    <input type="email" className='form-control' value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}> {error} </p>}
                <button type='submit' className="btn btn-success btnProducto mt-4">Finalizar Compra</button>
                </div>
            </form>
          

            

        </div>
    )
}


export default Checkout