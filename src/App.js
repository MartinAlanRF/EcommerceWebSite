import React from 'react';
import AppRouter from './routers/AppRouter';
/* Se importa AuthProvider para poder pasar todos sus estados a sus paginas hijas 
que se encuentren dentro de ese componente*/
import { AuthProvider } from './context/AuthContext';

/* Se importa el Product state de manera default */
import ProductState from './context/ProductState';

/* Aquí importo el modulo de bootstrap5 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
/* Importo mis estilos css */
import './components/styles/styleSweetAlert.css';


/* Importando paypal */
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

const App = () => {
  return (
    <>
      <AuthProvider>

        <PayPalScriptProvider
          options={{
            "client-id": "AbTDndzFLv-Wox3u0OTNkYQXA6fErI8PqzbbM1eaHdwAqvTDjsRUhzEJ-v55LNG2vEZ07ikRin5cpAx2",
          }}
        >

        <ProductState>

          <AppRouter/>

        </ProductState>

        </PayPalScriptProvider>

      </AuthProvider>
    </>
  )
}

export default App
