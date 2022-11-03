import React, {useContext} from "react";
import ProductContext from "../../context/ProductContext";
import { NavLink } from "react-router-dom";

const CartList = () => {
    const { cart, eliminarProductoCarrito } = useContext (ProductContext)
  return (
    <>
      {/* Si existe el cart */
        cart?.map( (producto) =>(
        <div className="card rounded-3 mb-4" key={producto.id}>
          <div className="card-body">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-4">
                <p className="lead fw-normal mb-2">{producto.name}</p>
                <p><span className="text-muted">{producto.description}</span></p>
              </div>
              <div className="col-md-3 col-lg-3">
                <h5 className="mb-0">$ {producto.price} mxn</h5>
              </div>
              <div className="col-md-2 col-lg-3">
                <NavLink className="btn btn-info w-100 mb-2" to={`/products/${producto.id}`}> 
                  <i class="bi bi-eye"></i> Ver
                </NavLink>
                <button onClick={()=> eliminarProductoCarrito(producto.id)} className="btn btn-danger w-100">
                  <i class="bi bi-x-circle 2"></i> Quitar
                </button>
              </div>
            </div>
          </div>
        </div>

        ))
      }
    </>

  )
}

export default CartList;

