import React from "react";
import './styles/styleFooter.css';
const Footer = () => {
  return (
    <>
      <footer id="footer" className="mt-auto py-3">
        <div className="wrap">
          {/* Inicio del menuFooter */}
          <div id="menu_footer">
            <h5>MENÚ</h5>
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="index.html">Blog</a>
              </li>
              <li>
                <a href="index.html">Información</a>
              </li>
              <li>
                <a href="index.html">Contacto</a>
              </li>
            </ul>
          </div>
          {/* Fin del menuFooter */}
          {/* Mapa */}
          <div id="location">
            <h5>¿Donde estamos?</h5>
            
            <iframe title='Mapa'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9574.923064887667!2d-96.93203505723477!3d19.553011423316423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2e2298badf87%3A0x2fee5115e2d809ae!2sBenem%C3%A9rita%20Escuela%20Normal%20Veracruzana%20Enrique%20C.%20Rebsamen!5e0!3m2!1ses-419!2smx!4v1657842123653!5m2!1ses-419!2smx"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Termina el mapa */}
          {/* Comineza div info */}
          <div id="info">
            {/* Comienza apartado desarrollado con */}
            <h5>Desarrollado con</h5>
            <p>
              <img
                //src="./img/html5-badge-h-css3-graphics-multimedia-performance-semantics.png"
                alt ='Imagen'
              />
            </p>
            {/* Sección del footer optimizado para */}
            <h5>Optimizado para</h5>
            <p id="browsers">
              <a href="/">
                <img
                 // src="./img/firefox-icon.png"
                  alt="FireFox Explorer"
                  title="FireFox"
                />
              </a>
              <a href="/">
                <img
                 // src="./img/chrome.png"
                  alt="Google Chrome Explorer"
                  title="GoogleChrome"
                />
              </a>
              <a href="/">
                <img
                 // src="./img/Opera_256x256.png"
                  alt="Opera Explorer"
                  title="Opera"
                />
              </a>
              <a href="/">
                <img
                 // src="./img/safari.png"
                  alt="safari Explorer"
                  title="Safari"
                />
              </a>
              <a href="/">
                {/* <img src="./img/android.png" alt="Android" title="Android" /> */}
              </a>
              <a href="/">
                {/* <img src="./img/ios.png" alt="IOS" title="IOS" /> */}
              </a>
            </p>
            {/* Termina sección optimizado para */}
            {/* Autor */}
            <h5>Autor</h5>
            <p>© Martin Alan Rodríguez Fisher</p>
            {/* Termina  Autor*/}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
