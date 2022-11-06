
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProductContext from "../../context/ProductContext"


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
      {/* <Title titulo={product.name} /> */}

      <section className='mt-4' style={{backgroundColor: '#eee', borderRadius: '8px' }}>
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="img-fluid rounded-3" alt="Apple Computer" />
                      </div>
                      <div className="col-lg-7 mt-auto mb-auto text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <h3 className="text-muted  mb-4">{product.description}</h3>
                        <h1 className="">$ {product.price} mxn</h1>
                        <section className="mt-4">
                          <button type="button" className="btn btn-success w-75" onClick={handleAgregarProductoCarrito}>
                            <i className="bi bi-cart"></i> Agregar al carrito
                          </button>
                          {/* Pregunta si el usuario es admnistrador */}
                          {auth.rol === 'admin' ?
                            <> {/* Si el rol es admin muestra un formulario pra poder añadir más productos */}
                              <ProductFormEdit />
                            </>
                            :
                            <>{/* En caso del que no sea admin el sistema no mostrará el formulario */}
                            </>}
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
        </div>
      </section>
    </>
  )
}

export default ProductPage;

