import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Title from "../../components/Title";
/*Styles for LoginPage*/
import '../../components/styles/styleLoginRegister.css';
/* Img profile */
import imgUser from '../../assets/imgs/users/perfil.png'; 
/* Importando useNavigate para redireccionar a una vista */
//import {useNavigate} from 'react-router-dom';

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
  <Title titulo="INICIA SESIÓN" />    
      <div id="div_login">
        <div id="div_login_container" className="row col-lg-8 col-md-8 col-sm-12" >

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
                    Iniciar sesión
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
