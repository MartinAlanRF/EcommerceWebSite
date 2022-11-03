import React from "react";
import Title from '../../components/Title';
/* Importando componentes para los productos */
//Lista de todos los productos
import ProductList from "../../components/productsComponents/ProductList";
//Formulario para añadir un nuevo producto
import ProductForm from "../../components/productsComponents/ProductForm";
/* Importo mis estilos css */
import '../../components/styles/styleProducts.css';

const ProductsPage = () => {
  return (
    <>
      <Title titulo={"Nuestro catálogo"} />
        <div className="container text-center  align-items-center h-100 ">
          <div className="row">
            <ProductList/>
           </div>
        </div>
        <ProductForm/>
    </>
  );
};

export default ProductsPage;
