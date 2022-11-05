import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Title from "../../components/Title";
/* Importando sweetalert */
import Swal from 'sweetalert2';

const initForm = {
  name: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  confirm_password: "",
  rol: "user"
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);
  const { signup } = useContext(AuthContext);
 
  const handleForm = async (e) => {
    e.preventDefault();
    console.log (form);
    if(confirmationPassword()){
      await signup(form);
    }else{
      warningAlert();
      document.getElementById("inputPassword").value = "";
      document.getElementById("inputConfirmPassword").value = "";
    }

  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const confirmationPassword = () =>{

    let bln_response = false;
    let password = document.getElementById("inputPassword").value;
    let confirmationPassword = document.getElementById("inputConfirmPassword").value;

    if(password.length !== 0){
      if(password === confirmationPassword){
        bln_response = true;
      }
    }
    return bln_response;
  }

    const warningAlert = async (message) =>{
      const Toast = Swal.mixin({
        toast: true,
        //position: 'bottom-end',
        position: 'center',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2000,
      // timerProgressBar: true
      })
    
      await Toast.fire({
        icon: 'warning',
        title: 'Las constraseñas no son iguales, intentelo nuevamente.'
      })
    }

  return (
    <>
      <div id="div_main">
        <Title titulo="Regístrate" />
        <div id="div_register">
          <div id="div_register_container" className="row col-lg-6 col-md-8 col-sm-12" >

            <form id="form_signup" onSubmit={handleForm} >

              <div className="form-group mt-2">

                <div className="row">
                  <div className="col-md-6">

                    <label htmlFor="inputLastName">Apellido(s):</label>
                    <input type="text" className="form-control" placeholder=" " id="inputLastName" name="lastName" 
                          value={form.lastName} onChange={cambio} required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputName">Nombre(s):</label>
                    <input type="text" className="form-control" placeholder=" " id="inputName"
                          value={form.name} name="name"  onChange={cambio} required />
                  </div>
                </div>

              </div>

              <div className="form-group mt-2">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail">Correo electrónico(s):</label>
                    <input type="email" className="form-control" placeholder=" " id="inputEmail" name="email" 
                          value={form.email} onChange={cambio} required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputUsername">Usuario(s):</label>
                    <input type="text" className="form-control" placeholder=" " id="inputUsername"
                          value={form.userName} name="userName" onChange={cambio}  required />
                  </div>
                </div>

              </div>

              <div className="form-group mt-2">
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="inputPassword">Contraseña:</label>
                    <input type="password" className="form-control" placeholder=" " id="inputPassword" name="password" 
                          value={form.password} onChange={cambio} required/>
                  </div>
                  <div className="col-md-12 mt-2">
                    <label htmlFor="inputConfirmPassword">Confirma tú contraseña:</label>
                    <input type="password" className="form-control" placeholder=" " id="inputConfirmPassword" 
                          name="confirm_password"  required/>
                  </div>
                </div>
              </div>

              <div className=" form-group d-flex justify-content-center mt-3 col-lg-12 col-md-12 col-sm-12 ">
                  <button  type="submit" className=" col-8 btn btn-success">
                    Registrase
                  </button>
                </div>

            </form>


          </div>
        </div>
      </div>


      {/* <main className="row">
        <article className="col">
          <form onSubmit={handleForm}>
          <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Nombre(s):
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                onChange={cambio}
                value={form.name}
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputLastName" className="form-label">
                Apellido(s):
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                onChange={cambio}
                value={form.lastName}
                name="lastName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                onChange={cambio}
                value={form.email}
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                onChange={cambio}
                value={form.userName}
                name="userName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                onChange={cambio}
                value={form.password}
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesion
            </button>
          </form>
        </article>
      </main>
      */}
    </>
  );
};

export default RegisterPage;
