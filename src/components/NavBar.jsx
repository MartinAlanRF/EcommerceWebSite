import React from "react";
/* Importo NavLinkPorque es el componente que nos permite
dar clic y llevarno a las rutras */
import { NavLink } from "react-router-dom";

import "./styles/styleFooter.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav
        id="NavBar"
        className=" mx-auto navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container">
          <div className="navbar-brand" href="/">
            <NavLink
              end
              to="/"
              aria-current="page"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              TIENDAMX
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuResponsive"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="menuResponsive">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  end /* Se colioca la prop end, debido a que si no se hace este enlace 
                  siempre permanece activo, aunque se encuentre
                  dentro de otra ruta yase login, register,etc */
                  to="/"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  INICIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  NUESTROS PRODUCTOS
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  to="/cart"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  CARRITO
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink
                  to="/profile"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  PERFIL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  INICIAR SESIÓN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  REGISTRARSE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
