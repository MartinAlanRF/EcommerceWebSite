import React, { useState, createContext } from "react";

/*  */
import { loginService, signupSerivce, verifyingTokenService } from "../services/authServices"

export const AuthContext  = createContext ({});

/* El estado inicial de cada varaible de estado */

const intialState = {
  id: null,
  email: null,
  username: null,
  password: null,
  authStatus: false,
}

/* Recibe todos los componentes que se encuentren dentro de auth provider */
  export const AuthProvider = ({children}) => {

    /* Guardar el estado (useStare) en una variable global */
    const [auth, setAuth] = useState(intialState)


    const login = async (form) => {
        /* En esta parte lo que se hace ahora es que se hara uso del servicio de authService para que ahora
        ese authService pase de manera global a todas las demás rutas */

      const data = await loginService(form);
        setAuth(
        {
         id: data.data.id,
         email: data.data.email,
         userName: data.data.userName,
         password: data.data.password,
         authStatus: true,       
      });
      localStorage.setItem("token", data.token)
    };

    const signup = async (form) => {
      const data = await signupSerivce(form);
      setAuth({
        id: data.data.id,
        email: data.data.email,
        username: data.data.username,
        password: data.data.password,
        authStatus: true,
      });
  
      localStorage.setItem("token", data.token);
    };
  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const resp = await verifyingTokenService();

      localStorage.setItem("token", resp.token);

      setAuth({
        id: resp.data.id,
        username: resp.data.username,
        email: resp.data.email,
        password: resp.data.password,
        authStatus: true,
      });
    } else {
      localStorage.removeItem("token");
      setAuth({
        id: null,
        username: null,
        email: null,
        password: null,
        authStatus: false,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      id: null,
      username: null,
      email: null,
      password: null,
      authStatus: false,
    });
  };

  return (
    /* Exportando la variable de estado y la función mediante las props de AuthProvider */
    <AuthContext.Provider value={{auth, login, signup, verifyingToken, logout}}>
        {children}
    </AuthContext.Provider>
  )
};

