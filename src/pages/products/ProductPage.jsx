
import React, { useEffect, useContext } from "react";
import ProductContext from "../../context/ProductContext"
import Title from '../../components/Title'
import ProductFormEdit from "../../components/productsComponents/ProductFormEdit";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const {product, obtenerProducto, agregarProductoCarrito } = useContext(ProductContext)

  useEffect(() => {
    obtenerProducto(id);
  }, [id, obtenerProducto]);

  const handleAgregarProductoCarrito = () => {
    agregarProductoCarrito(product);
  };

  return (
    <>
      <Title titulo="Pagina de producto" />
      <main className="row pt-5">
        <article className="col-md-4">
          <ProductFormEdit/>
        </article>
        <article className="col-md-8">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
              className="card-img-top"
              alt={"Laptop"}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.id}</p>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <button
                type="button"
                className="btn btn-primary"
               onClick={handleAgregarProductoCarrito}
              >
                <i class="bi bi-cart"></i> Agregar al carrito
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default ProductPage