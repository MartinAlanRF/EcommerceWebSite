import React, {useContext} from "react";
import Title from '../../components/Title';
/* Importando componentes para los productos */
//Lista de todos los productos
import ProductList from "../../components/productsComponents/ProductList";

import ProductForm from "../../components/productsComponents/ProductForm";

/*Auth context para validar los roles para añadir, eliminar productos */
import { AuthContext } from "../../context/AuthContext";

/* Importando el estilo para  ProductsPage */
import '../../components/styles/products/styleProducts.css';


const ProductsPage = () => {

  const {auth} = useContext(AuthContext);
  
  return (
    <>
      <Title titulo={"Nuestro catálogo de Productos"} />
        {/* Pregunta si el usuario es admnistrador */}
          {auth.rol === 'admin' ? 
            <> {/* Si el rol es admin muestra un formulario pra poder añadir más productos */}
                <div className="cotainer mb-3 ms-4">
                  <div className="row">
                    <ProductForm/>
                  </div>
                </div>
            </>
            : 
            <>{/* En caso del que no sea admin el sistema no mostrará el formulario */}
            </>}
        <div className="container d-flex text-center justify-content-centers align-items-center p-2 ">
          <div className="row">
            <ProductList/>
          </div>
        </div>

        
    </>
  );
};

export default ProductsPage;
