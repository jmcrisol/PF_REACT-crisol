import React from 'react'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <header className="sticky-top">
        <nav className="navbar navbar-expand-lg menu">
          <div className="container">
            <a className="navbar-brand " href="#"> <img src="https://mushiditos.com.ar/assets/img/logo.svg" alt="" width={140} className="d-inline-block align-text-top ms-5" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item mx-3 menu-btn">
                  <a className="nav-link active links" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item mx-3 menu-btn">
                  <a className="nav-link links" href="#">Nosotros</a>
                </li>
                <li className="nav-item dropdown mx-3 menu-btn">
                  <a className="nav-link dropdown-toggle links" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                  </a>
                  <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Portalibretas</a></li>
                    <li><a className="dropdown-item" href="#">Combos</a></li>
                  </ul>
                </li>
                <li className="nav-item mx-3 menu-btn">
                  <a className="nav-link links" href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget/>
        </nav>
      </header>
  )
}

export default Navbar