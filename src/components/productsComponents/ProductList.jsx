import React, { useState, useContext, useEffect } from "react";
/* Este productcontext esta por default por eso no se colocan las llaves */
import ProductContext from "../../context/ProductContext";
/* Importando navlink para poder navegar al ver la info del producto */
import { NavLink } from "react-router-dom";
/*  */
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../context/AuthContext";

/* Estilo para los botones */
import '../../components/styles/components/stylePaginationBttns.css';
/* Importando el estilo para  ProductsPage */
import '../../components/styles/products/styleProducts.css';

const ProductList = () => {
  // const [products] = useState(initialState)

  /* Uso del ProductsContext */
  //const { auth, login } = useContext(AuthContext);

  /* Este products sale del archivo de producState.jsx, en la parte del 
    <ProductContext.Provider value={{products: initialState.products}}>
    aun falta ver como haré el uso del globalState y del dispatch   
      // const printID = (id)=>{
  //   console.log(id)
  // }
    */

  const {auth} = useContext(AuthContext);

  const { products, obtenerProductos,eliminarProducto } = useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 6;
  const pagesVisited = pageNumber * productPerPage

  const displayProducts = products.slice(pagesVisited, pagesVisited + productPerPage).map((product) => {
    return  (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-2" key={product.id} >
        <div className="card text-black"  >
          <img id="img_cardProduct" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/240px-Imagen_no_disponible.svg.png" className="card-img-top" alt="Producto" />
          <div className="card-body">
            <div className="text-center">

              <h5 className="card-title">{product.name}</h5>
              <p className="text-muted mb-4">{product.description}</p>
              <br />
              <h5 className="">$ {product.price} mxn</h5>
            </div>
            
            <div className="d-flex justify-content-center mt-4">
              <div className="col-6">
                <NavLink id="btn_seeProduct" to={`/products/${product.id}`} className=" w-100 btn btn-info px-2">
                <i className="bi bi-archive"></i> Ver producto
                </NavLink>     
              </div>
              {auth.rol === 'admin' ? 
              <> 
                <div className="col-6">
                  <button id="btn_deleteProduct" className="btn btn-danger w-100 ms-2" onClick={()=> eliminarProducto(product.id)}>
                    <i className="bi bi-trash"></i> Eliminar
                  </button>
                </div>
              </>
              : <></>}
            </div>
          </div>
        </div>
      </div>        
    );
  });

  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({selected}) =>{
    setPageNumber(selected);
  };

  return (
    <>
      {displayProducts}
      <ReactPaginate 
        previousLabel={"<<"} nextLabel={">>"} 
        pageCount={pageCount} onPageChange={changePage} containerClassName ={"paginationBttns"} 
        previousLinkClassName={"previousBttn"} nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisable"} activeClassName={"paginationActive"}/>
    </>
  );
};


export default ProductList;
