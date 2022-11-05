import React, { useState, useContext, useEffect } from "react";
/* Este productcontext esta por default por eso no se colocan las llaves */
import ProductContext from "../../context/ProductContext";
/* Importando navlink para poder navegar al ver la info del producto */
import { NavLink } from "react-router-dom";
/*  */
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../context/AuthContext";

/* Estilo para los botones */
import '../styles/stylePaginationBttns.css';

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
            <div className="col-4">
              <NavLink to={`/products/${product.id}`} className=" w-100 btn btn-info px-2">
                Detalles
              </NavLink>     
            </div>
            {auth.rol === 'admin' ? 
            <> 
              <div className="col-4">
                <button className="btn btn-danger w-100 ms-2" onClick={()=> eliminarProducto(product.id)}>
                <i class="bi bi-trash"></i> 
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
