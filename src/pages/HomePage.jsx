import React from "react";
/* Se importa el componente de titutlo */
import Title from "../components/Title";
/* Import de css para la página HOME */
import "../components/styles/styleMain.css";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="mainHome">
        {/* JumBotrom EcoomerceWebsite */}
        <div id="jumb" className="border border-3  border-dark  rounded-4 position-relative overflow-hidden p-3 p-md-5 m-md-3 ">
          <div className="col-md-12 mx-auto my-1">
            {/* <div className="product-device shadow-sm d-none d-md-block " /> */}
            <h1 className="text-center"> <i className="bi bi-pc-display-horizontal"></i> Pc's_MARF</h1>
            <p className="lead fw-normal text-center">
                Tienda de tecnología enfocada en vender lo necesario para tú computadora.
                <br />
                Para poder comprar debes estar logeado, dentro de la página.
            </p>
          </div>
        </div>
        {/* Termina Jumbotrom */}

        <Title titulo="PRODUCTOS QUE VENDEMOS"/>
        {/* Categorías productos que vendemos */}
        <div id="div_productosHome" className="container-fluid p1">
          <div className="row border border-ligth p-2 mb-2 border-opacity-25 rounded">
            <div className="col-lg-6 order-lg-2 text-white seccionProducto1"></div>
            <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
              <h2 className="text-center">PROCESADORES</h2>
              <p className="lead mb-0">
                  Dentro de nuestrienda encontrarás una gamma extensa de procesadores, actualmente
                  contamos con las marcas de AMD e INTEL
              </p>
            </div>
          </div>
          <div className="row border border-ligth p-2 mb-2 border-opacity-25 rounded">
            <div className="col-lg-6 order-lg-1 text-white seccionProducto2"></div>
            <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify seccionText">
              <h2 className="text-center">PLACAS MADRES</h2>
              <p className="lead mb-0">
                  Otra componente que pueden encontrar dentro de nuestra tienda son las, placas madres.
                  Tenemos una gamma extensa y de marcas conocidas como ASUS, GIGABYTE, MSI, etc.
              </p>
            </div>
          </div>
          <div className="row border border-ligth p-2 mb-2 border-opacity-25 rounded">
            <div className="col-lg-6 order-lg-2 text-white seccionProducto3"></div>
            <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
              <h2 className="text-center">MEMORIAS RAM</h2>
              <p className="lead mb-0">
                Contamos con las mejores marcas en memoria ram, para tú computadora, como KINGSTON, ADATA, 
                CORSAIR, etc. 
              </p>
            </div>
          </div>
          <div className="row border border-ligth p-2 mb-2 border-opacity-25 rounded">
            <div className="col-lg-6 order-lg-1 text-white seccionProducto4"></div>
            <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify seccionText">
              <h2 className="text-center">FUENTES DE PODER</h2>
              <p className="lead mb-0">
                Las fuentes de poder son la parte más vital para tú computadora, por ello contamos con 
                las mejores marcas para proteger tus componentes de descargas o fallas electricas.
              </p>
            </div>
          </div>               
        </div>
        {/* Termina el div categoría de productos que vendemos */}
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
