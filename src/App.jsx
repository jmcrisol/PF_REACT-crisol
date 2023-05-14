import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/carritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (


    <div>
      <BrowserRouter>
        <CarritoProvider>
              <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
              </Routes>
          </CarritoProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;