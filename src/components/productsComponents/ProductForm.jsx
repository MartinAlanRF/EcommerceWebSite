import React, { useState, useContext } from "react";
import ProductContext from '../../context/ProductContext';
 /* Componenetes para crear el modal con react-boostrap */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
/* Importando sweetalert */
import Swal from 'sweetalert2';
/* Importando el estilo para  ProductsPage */
import '../../components/styles/products/styleProducts.css';

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
    /* Se manda a llamar a la función verifyInputs para verificar que los campos no vayan vaciós */
    if(verifyInputs()){
      /* Se manda a llamar a la función crear producto mandandole la información del form */
      await crearProducto (form);
      /*setForm: Actualiza la información que tendra el formulario limpian así los campos con la variable 
      de estado inicial del form */
      setForm(initForm);
      /* Se manda a llamar a la función handleClose para cerrar el modal una vez se haya creado el producto */
      handleClose();
      /* Se manda a llamar a la función de  */ 
    }else{
      warningAlert();
    }

  };

  const cambio = (e) => {
    setForm({
      ...form, //Manfiene el estado del formulario que ya tiene Si no le pongo los 3 puntos toma cada cambio que se le hizo
      [e.target.name]: e.target.value,
    });
  };


  /* Funciones para el modal */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* Función para validar que los campos no se manden vaciós */
  const verifyInputs = () =>{
    let bln_response = false;

    let inputName = document.getElementById("inputName").value;
    let inputDescription = document.getElementById("inputDescription").value;
    let inputPrice = document.getElementById("inputPrice").value;

    if((inputName.length !== 0) && (inputDescription.length !== 0) && (inputPrice.length !== 0)){
      bln_response = true;
    }

    return bln_response;
  }
  /* Función de advetencia implementada con sweet alert2 */
  const warningAlert = async () =>{
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
      title: '¡Por favor llene los campos, no deje ninguno vació!'
    })
  }

  return (
    <>
      <Button id="btn_add" className="ms-auto me-4" variant="primary" onClick={handleShow}>
        <i className="bi bi-plus-lg"></i> Añadir un producto
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir un nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-100" onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="inputName" name="name" value={form.name} onChange={cambio}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputDescription" className="form-label">
                Descripcion
              </label>
              <input type="text" name="description" className="form-control" id="inputDescription" value={form.description} onChange={cambio}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPrice" className="form-label">
                Precio
              </label>
              <input type="nomber" name="price" className="form-control" id="inputPrice" value={form.price} onChange={cambio}/>
            </div>
            <div className="mb-3 text-end">
              <Modal.Footer>
                <button type="submit" className="btn btn-success"> <i className="bi bi-plus-lg"></i>  Añadir </button>
                <Button variant="secondary" onClick={handleClose}>Cerrar <i className="bi bi-x"></i> </Button>
              </Modal.Footer>
            </div>
        </form>
          
        </Modal.Body>
      </Modal>
    </>

  );
};

export default ProductForm;
