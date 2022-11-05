import React, {useContext} from "react";
import Title from '../../components/Title';
/* Importando componentes para los productos */
//Lista de todos los productos
import ProductList from "../../components/productsComponents/ProductList";
//Formulario para añadir un nuevo producto
import ProductForm from "../../components/productsComponents/ProductForm";
//
import { AuthContext } from "../../context/AuthContext";

/* import { Modal } from 'bootstrap';
 */
/* Importo mis estilos css */
import '../../components/styles/styleProducts.css';


const ProductsPage = () => {

  const {auth} = useContext(AuthContext);
  
  return (
    <>
      <Title titulo={"Nuestro catálogo"} />
        <div className="container text-center  align-items-center h-100 ">
          <div className="row">
            <ProductList/>
          </div>
        </div>
        {/* Pregunta si el usuario es admnistrador */}
        {auth.rol === 'admin' ? 
          <> {/* Si el rol es admin muestra un formulario pra poder añadir más productos */}
            <div className="container">
              <ProductForm/>
            </div>
          </>
          : 
          <>{/* En caso del que no sea admin el sistema no mostrará el formulario */}
          </>}
        
    </>
  );
};

export default ProductsPage;
