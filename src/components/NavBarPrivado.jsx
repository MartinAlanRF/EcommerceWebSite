import React, {useContext} from "react";
/* Importo NavLinkPorque es el componente que nos permite dar clic y llevarno a las rutras */
import { NavLink } from "react-router-dom";
/* Importo authcontext para poder pasar los valores de mi incio de sesison mediante las prop */
import { AuthContext } from "../context/AuthContext";
/* Importando useNavigate para redireccionar a una vista */
import {useNavigate} from 'react-router-dom';

import "./styles/styleFooter.css";

const NavBarPrivado = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión')
    logout();
    navigate('/login');
  };

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
                 <i className="bi bi-house"></i> INICIO
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
                <i className="bi bi-journal"></i>  NUESTROS PRODUCTOS
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
                <i className="bi bi-cart"></i>  CARRITO
                </NavLink>
              </li>
            </ul>

            <div className="">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* {auth.userName ? auth.userName : "Cuenta"} */}
                    {auth.userName}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                    <NavLink
                      to="/profile"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                    >
                      <i className="bi bi-person-circle"></i> Perfil
                    </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-in-left"></i>  Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarPrivado;
