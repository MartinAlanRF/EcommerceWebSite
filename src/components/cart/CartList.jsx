import React, {useContext} from "react";
import ProductContext from "../../context/ProductContext";
import { NavLink } from "react-router-dom";

const CartList = () => {
    const { cart, eliminarProductoCarrito } = useContext (ProductContext)
  return (
    <ul>
      {/* Si existe el cart */
        cart?.map( (producto) =>(
          <li key={producto.id}>
            <p>{producto.id}</p>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <p>{producto.price }</p>
            <NavLink className="btn btn-info" to={`/products/${producto.id}`}> 
              Ver mas...
            </NavLink>
            <button 
              onClick={()=> eliminarProductoCarrito(producto.id)}
              className="btn btn-danger">
              Eliminar
            </button>
          </li>
        ))
      }

    </ul>

  )
}

export default CartList