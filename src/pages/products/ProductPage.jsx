
import React, { useEffect, useContext } from "react";
import ProductContext from "../../context/ProductContext"
import Title from '../../components/Title'
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const {product, obtenerProducto } = useContext(ProductContext)

  useEffect(() => {
    /* Nota aquí no es necesario colocar el await debido a que ya cuenta con el await 
    desde el productoState */
    obtenerProducto(id);
  }, [id, obtenerProducto]);
  return (
    <>
      <Title titulo="Pagina de producto" />
      <div className="row">
        <div className="col-md-12">
          <div className="card" style={{ width: "80", height: "200px" }}>
            <img              
              alt={"Laptop"}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <button
                type="button"
                className="btn btn-primary"
              //  onClick={handleAgregarProductoCarrito}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage