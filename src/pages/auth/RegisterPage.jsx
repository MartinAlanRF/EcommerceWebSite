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
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);
  const { auth, signup } = useContext(AuthContext);
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
      <Title titulo="Registro" />
      <section className="row">
        <article className="col">
          <p className="text-center">{auth.id}</p>
        </article>
      </section>
      <main className="row">
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
     
    </>
  );
};

export default RegisterPage;
