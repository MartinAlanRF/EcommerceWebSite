import React, { useContext, useEffect } from "react";
/* Este productcontext esta por default por eso no se colocan las llaves */
import ProductContext from "../../context/ProductContext";
/* Importando navlink para poder navegar al ver la info del producto */
import { NavLink } from "react-router-dom";

const ProductList = () => {
  // const [products] = useState(initialState)

  /* Uso del ProductsContext */
  //const { auth, login } = useContext(AuthContext);

  /* Este products sale del archivo de producState.jsx, en la parte del 
    <ProductContext.Provider value={{products: initialState.products}}>
    aun falta ver como haré el uso del globalState y del dispatch   
    */
  const { products, obtenerProductos,eliminarProducto } = useContext(ProductContext);

  // const printID = (id)=>{
  //   console.log(id)
  // }

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <>
    <div className="container text-center  align-items-center h-100">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-2" key={product.id}>
            <div className="card text-black"  >
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted mb-4">{product.id}</p>
                  <p className="text-muted mb-4">{product.description}</p>
                  <p className="text-muted mb-4">{product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-info" 
                  >
                    Ver más
                  </NavLink>
                  <button
                      className="btn btn-danger"
                    onClick={()=> eliminarProducto(product.id)}
                      //onClick={() => printID(product.id)} //Esta función ess llamada así
                    //porque se pasana parametros en caso de que no pase parametros
                    //se pone por ejp. printID(), ya que sino se colca como se hizo
                    //la función la ejecuta automaticamente
                    >
                      Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>       
    </>
  );
};


export default ProductList;
