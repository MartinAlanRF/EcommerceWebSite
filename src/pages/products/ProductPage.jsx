
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProductContext from "../../context/ProductContext"

import Title from '../../components/Title'
import ProductFormEdit from "../../components/productsComponents/ProductFormEdit";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const { product, obtenerProducto, agregarProductoCarrito } = useContext(ProductContext)
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    obtenerProducto(id);
  }, [id, obtenerProducto]);

  const handleAgregarProductoCarrito = () => {
    agregarProductoCarrito(product);
  };

  return (
    <>
      <Title titulo={product.name} />

      <div className="d-flex justify-content-center text-center h-100 ">
        <div className="row">

          <div className="col-sm-12 col-md-10 col-lg-10  mx-auto mb-2" key={product.id} >
            <div className="card text-black"  >
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted mb-4">{product.description}</p>
                  <br />
                  <h5 className="">$ {product.price} mxn</h5>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <div className="col-12">
                    <button type="button" className="btn btn-success w-75" onClick={handleAgregarProductoCarrito}>
                      <i class="bi bi-cart"></i> Agregar al carrito
                    </button>
                    {/* Pregunta si el usuario es admnistrador */}
                    {auth.rol === 'admin' ?
                      <> {/* Si el rol es admin muestra un formulario pra poder añadir más productos */}
                        <ProductFormEdit />
                      </>
                      :
                      <>{/* En caso del que no sea admin el sistema no mostrará el formulario */}
                      </>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage;

