import React, {useContext} from "react";
import ProductContext from "../../context/ProductContext";
import { NavLink } from "react-router-dom";

const CartList = () => {
    const { cart, eliminarProductoCarrito } = useContext (ProductContext)
  return (
    <>
      {/* Si existe el cart */
        cart?.map( (producto) =>(
        <div  className="card rounded-3 mb-4" key={producto.id}>

          <div id="div_cart" className="card-body">
            <div className="row d-flex justify-content-between align-items-center">
              <div id="img_cart" className="col-md-3 col-lg-2 col-sm-8">
                <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="product" />
              </div>

              <div id="div_productCartText" className="col-md-4 col-lg-4 col-sm-10">
                <p>{producto.name}</p>
                <p><span className="text-muted">{producto.description}</span></p>
              </div>
              <div id="div_productCartPrice" className="col-md-3 col-lg-3 col-sm-10">
                <p>$ {producto.price} mxn</p>
              </div>

              <div className="col-md-2 col-lg-3 col-sm-12">
                <NavLink id="btn_seeProductCart" className="btn btn-info w-100 mb-2" to={`/products/${producto.id}`}> 
                  <i className="bi bi-eye"></i> Detalles
                </NavLink>
                <button id="btn_deleteProductCart" onClick={()=> eliminarProductoCarrito(producto.id)} className="btn btn-danger w-100">
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

