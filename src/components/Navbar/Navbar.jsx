import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg menu">
        <div className="container">
          <NavLink to={`/`} className="navbar-brand " >
            {" "}
            <img
              src="https://mushiditos.com.ar/assets/img/logo.svg"
              alt=""
              width={140}
              className="d-inline-block align-text-top ms-5"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-3 menu-btn">
                <NavLink to={`/`}
                  className="nav-link active links"
                  aria-current="page"
                  
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item mx-3 menu-btn">
                <a className="nav-link links disabled" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item dropdown mx-3 menu-btn">
                <a
                  className="nav-link dropdown-toggle links"
                  
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portalibretas
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <NavLink to={`/categoria/Celestes`} className="dropdown-item">
                      Celestes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/categoria/Rosas`} className="dropdown-item">
                      Rosas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/categoria/Otros`} className="dropdown-item">
                      Otros
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3 menu-btn">
                <a className="nav-link links disabled" href="#">
                  Contacto
                </a>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
