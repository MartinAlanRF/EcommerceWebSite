import React, { useState, useContext } from "react";
import ProductContext from '../../context/ProductContext';
/* So you can import our Modal component like that: */
/* import { Modal } from 'bootstrap' */
/* or if you want to import everything you can do: */
//import * as Bootstrap from 'bootstrap'
/* Se crea una variable de estado inicial de tipo objeto */

const initForm = {
  name: "",
  description: "",
  price: "",
};

const ProductForm = () => {
  /* Se hace uso del useState para obtener el valor de los inputs del formulario */
  const [form, setForm] = useState(initForm);

  /* Se implementa la función de crearProducto dentro de ProductContext->ProductState*/
  const {crearProducto} = useContext (ProductContext)

  /* Función usada para obtener los valores del formualrio */
  const handleForm = async (e) => {
    /* Previene que se recargue la página al mandar la info del formulario */
    e.preventDefault();
    /* Se manda a llamar a la función crear producto mandandole la información del form */
    await crearProducto (form);
    setForm(initForm); //Actualiza la información que tendra el formulario tecnicamente 
  // en esta linea de comando limpia los campos con la variable de estado inicial del form
  };

  const cambio = (e) => {
    setForm({
      ...form, //Manfiene el estado del formulario que ya tiene Si no le pongo los 3 puntos toma cada cambio que se le hizo
      [e.target.name]: e.target.value,
    });
  };


  return (
    <form className="w-100" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          name="name"
          value={form.name}
          onChange={cambio}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputDescription" className="form-label">
          Descripcion
        </label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="inputDescription"
          value={form.description}
          onChange={cambio}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
          Precio
        </label>
        <input
          type="nomber"
          name="price"
          className="form-control"
          id="inputPrice"
          value={form.price}
          onChange={cambio}
        />
      </div>
      <div className="mb-3 text-end">
        <button type="submit" className="btn btn-success">
          Crear
        </button>
      
      </div>
    </form>
  );
};

export default ProductForm;
