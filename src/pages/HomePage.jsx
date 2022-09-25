import React from "react";
/* Se importa el componente de titutlo */
import Title from "../components/Title";
/* Import de css para la página HOME */
import "../components/styles/styleMain.css";

const HomePage = () => {
  return (
    <>
      <div className="main">
        {/* JumBotrom EcoomerceWebsite */}
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
          <div className="product-device shadow-sm d-none d-md-block" />
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="/">
              Coming soon
            </a>
          </div>
          {/* 
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" /> */}
        </div>
        {/* Termina Jumbotrom */}
        <Title titulo="INICIO" />
        {/* Categorías productos que vendemos */}
        <div className="container-fluid p1">
          <div className="row">
            <div class="col-lg-6 order-lg-2 text-white seccionProducto1"></div>
            <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>
          <div className="row">
            <div class="col-lg-6 order-lg-1 text-white seccionProducto2"></div>
            <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify seccionText">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>
          <div className="row">
            <div class="col-lg-6 order-lg-2 text-white seccionProducto3"></div>
            <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>         
        </div>
        {/* Termina el div categoría de productos que vendemos */}
      </div>
      
    </>
  );
};

export default HomePage;
