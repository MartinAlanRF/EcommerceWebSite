import React, {useContext} from "react";
/* Importo NavLinkPorque es el componente que nos permite
dar clic y llevarno a las rutras */
import { NavLink } from "react-router-dom";
/* Importo authcontext para poder pasar los valores de mi incio de sesison mediante las prop */
import { AuthContext } from "../context/AuthContext";


import "./styles/styleFooter.css";

const NavBarPublico = () => {
  const { auth } = useContext(AuthContext);
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
                    {auth.userName ? auth.userName : "Mi cuenta"}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <NavLink
                        to="/login"
                        aria-current="page"
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                      >
                        Iniciar sesión
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        aria-current="page"
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                      >
                        Registrarse
                      </NavLink>
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

export default NavBarPublico;
