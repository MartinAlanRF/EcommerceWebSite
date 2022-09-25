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


<section  id="root2">
<div className="container pt-2 mb-2">
  <div className="row justify-content-center">
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-6 cardProduct">
      <div className="card">
      <p className="textDescription ">
          TECLADOS
      </p>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-8 col-xl-6 cardProduct">
      <div className="card text-black">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">Believing is seeing</h5>
            <p className="text-muted mb-4">Apple pro display XDR</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-8 col-xl-6 cardProduct">
      <div className="card text-black">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">Believing is seeing</h5>
            <p className="text-muted mb-4">Apple pro display XDR</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-6 cardProduct">
      <div className="card text-black">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">Believing is seeing</h5>
            <p className="text-muted mb-4">Apple pro display XDR</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 cardProduct">
      <div className="card text-black">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">Believing is seeing</h5>
            <p className="text-muted mb-4">Apple pro display XDR</p>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>Pro Display XDR</span><span>$5,999</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Pro stand</span><span>$999</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Vesa Mount Adapter</span><span>$199</span>
            </div>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Total</span><span>$7,197.00</span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 cardProduct">
      <div className="card text-black">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" className="card-img-top" alt="Apple Computer" />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">Believing is seeing</h5>
            <p className="text-muted mb-4">Apple pro display XDR</p>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>Pro Display XDR</span><span>$5,999</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Pro stand</span><span>$999</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Vesa Mount Adapter</span><span>$199</span>
            </div>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Total</span><span>$7,197.00</span>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>
</section>