import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    // <>
    // <Navbar/>
    // <ItemListContainer/>
    // <ItemDetailContainer/>
    // </>

    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={ItemListContainer} />
            <Route path='/category/:categoryId' element={ItemListContainer} />
            <Route path='/item/:itemId' element={ItemDetailContainer}/>
            <Route/>
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;