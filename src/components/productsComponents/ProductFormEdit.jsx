/* Se importo useContext (para obtener el product) y useEffect (para cargar la info del product cuando se cargue vista
  de productPage) */
import React, { useState, useContext, useEffect } from "react";
import ProductContext from '../../context/ProductContext';

/* Componenetes para crear el modal con react-boostrap */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/* Importando sweetalert */
import Swal from 'sweetalert2';

const initForm = {
  id: "",
  name: "",
  description: "",
  price: "",
};

const ProductFormEdit = () => {
  const [form, setForm] = useState(initForm);
  /* Se desestruturo producto de ProductContext -> ProductState */
  const { product, actualizarProducto } = useContext(ProductContext);

  const handleForm = async (e) => {
    e.preventDefault();
    /* Manda a llamar a la función de verifyInputs en donde valida que no esten vaciós los campos */
    if (verifyInputs()){
      actualizarProducto(form.id, form)
      handleClose();
    }else{//En caso de estar vaciós los inputs de ejecuta la función warningAlert con sweetAlert2
      warningAlert();
    }
    
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setForm(product) //Cuando se cargue la pagina que llene el formulario con la inf de product 
  }, [product]);

  /* Funciones para el modal */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* Función para validar que los campos no se manden vaciós */
  const verifyInputs = () => {
    let bln_response = false;

    let inputName = document.getElementById("inputName").value;
    let inputDescription = document.getElementById("inputDescription").value;
    let inputPrice = document.getElementById("inputPrice").value;

    if ((inputName.length !== 0) && (inputDescription.length !== 0) && (inputPrice.length !== 0)) {
      bln_response = true;
    }

    return bln_response;
  }

  /* Función de advetencia implementada con sweet alert2 */
  const warningAlert = async () => {
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
    <Button className="ms-auto w-75 mt-2" variant="btn btn-warning" onClick={handleShow}>
      <i class="bi bi-pencil-square"></i> Editar producto
    </Button>

    <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i class="bi bi-pencil-square"></i> Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-100" onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="inputName" name="name" value={form.name} onChange={cambio} />
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
                <button type="submit" className="btn btn-success">
                <i class="bi bi-check-square"></i> Actualizar
                </button>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar <i className="bi bi-x"></i> 
                </Button>
              </Modal.Footer>


            </div>

          </form>
        </Modal.Body>
      </Modal>



       
   </> 

  );
};

export default ProductFormEdit;
