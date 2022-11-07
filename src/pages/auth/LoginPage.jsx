import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/* Img profile */
import imgUser from '../../assets/imgs/users/perfil.png'; 
/* Importando useNavigate para redireccionar a una vista */
//import {useNavigate} from 'react-router-dom';

/*Styles for LoginPage*/
import '../../components/styles/styleLoginRegister.css';

const initForm = {
  userName: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  /* Se extraer la función login de mi authProvider que esta dentro
  del authContext y el atuh que guarda los datos del usuario */
  // const { auth, login } = useContext(AuthContext);
  const {login } = useContext(AuthContext);
  const handleForm = async (e) => {
    e.preventDefault();
    /* Se impplementa el uso de la función login del authContex->AuthProvider */
    await login(form);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="div_login" className="">
        <div className="row col-lg-6 col-md-10 col-sm-12">
          <div className="col-12 mb-3 border border-3 border-top-0 border-start-0 border-end-0 border-dark">
           <h2 className='text-center '>INICIA SESIÓN</h2>
          </div>
        </div>
        <div id="div_login_container" className="row col-lg-8 col-md-10 col-sm-10 border border-dark p-2 mb-2 border-opacity-75" >

          <img id="imgUserProfile" src={imgUser} alt="imgloginUser" />

          <div id="div_login_form" className="">
            <form onSubmit={handleForm}>

              <div className="form-floating mb-3">
                  <input type="text" className="form-control" onChange={cambio}  value={form.userName} 
                         name="userName" placeholder=" " id="inputUsername"/>
                  <label htmlFor="floatingInput">Usuario</label>
                </div>

                <div className="form-floating">
                  <input type="password" className="form-control" placeholder=" " id="inputPassword"
                         onChange={cambio} value={form.password} name="password" />
                  <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div className="d-flex justify-content-center mt-3 col-lg-12 col-md-12 col-sm-12 ">
                  <button  type="submit" className=" col-8 btn btn-success">
                  <i className="bi bi-box-arrow-in-right"></i> Iniciar sesión
                  </button>
                </div>

            </form>          
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
