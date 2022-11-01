import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Title from "../../components/Title";
/* Importando useNavigate para redireccionar a una vista */
import {useNavigate} from 'react-router-dom';

const initForm = {
  name: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  confirm_password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleForm = async (e) => {
    e.preventDefault();
    await signup(form);
    navigate('/');
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title titulo="Registro de usuarios" />
      <div id="div_register">
        <div id="div_login_container" className="row col-lg-8 col-md-8 col-sm-12" >
          <p>Para poder comprar debes crear una cuenta, solo te tomará menos de un minuto</p>
          
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

              </div>

            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Iniciar sesión
            </button>

          </form>
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
