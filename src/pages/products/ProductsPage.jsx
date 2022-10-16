import React from "react";
import Title from '../../components/Title';
/* Importando componentes para los productos */
//Lista de todos los productos
import ProductList from '../../components/ProductList';
//Formulario para añadir un nuevo producto
import ProductForm from "../../components/products/ProductForm";

/* Importo mis estilos css */
import '../../components/styles/styleProducts.css';

const ProductsPage = () => {
  return (
    <>
      <Title titulo={"Productos"} />
      <div className="container container_modal mb-3 ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 modal_product">
                      {/* Button trigger modal */}
            <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#modal_addProduct">
              Añadir un nuevo producto
            </button>
            {/* Modal */}
            <div className="modal fade" id="modal_addProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Producto</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <ProductForm/>
                  </div>
                  {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Understood</button>
                  </div> */}
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <ProductList/>
    </>
  );
};

export default ProductsPage;
