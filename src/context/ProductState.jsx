/* Se importa useReducer para hacer uso del reducer desde productReducer */
import React, { useReducer, useCallback } from 'react';
/* Se importa el archivo donde se creo el context */
import ProductContext from './ProductContext';
/* Se importa el archivo donde se implementan las acciones ProductReducer*/
import ProductReducer from './ProductReducer';
/* Se realiza la importanción de las funciones creadas
en productService */
import {
  obtenerProductosService,
  crearProductoService,
  obtenerProductoService,
  actualizarProductoService,
  eliminarProductoService,
} from '../services/productServices.js';

/* Importando sweetalert */
import Swal from 'sweetalert2';


/* Se crea el estado inicial de mi objeto Producto */
const initialState = {
  products: [],
  /* Se añadade otra variable de estado iniciar la cual es de tipo objeto ya que solo traera al info de un solo producto */
  product: {},
  cart: [],
}

/* FUNCIONES DE SWEET ALERT */

const succesAlert = async (message) => {
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
    icon: 'success',
    title: message
  })
}

const warningAlert = async (message) => {
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
    title: message
  })
}

/* Recibe todos los componentes que se encuentren dentro de auth provider */
const ProductState = ({ children }) => {
  /*Se impmenta useReducer snipet para poder mandar al estado global  la información de los productos*/
  /*Ayuda a ejecutar un reducer/dispatch permite utilizar reducers que haya creado */
  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  /* Se implementa el uso del hookUseCallBack para poder memorizar la función y esta no se ejecute varias veces
      dentro del useEfect */
  const obtenerProductos = useCallback(async () => {

    try {
      /* Se llama a la función de ObtenerProductosService dentro del archivo productService*/
      const resp = await obtenerProductosService();
      /* Con la la data de resp se ocupa la función map para obtener el arreglo de los objetos que tenmos*/

      const productos = resp.data.map((obj) => {
        return {
          id: obj._id,
          name: obj.name,
          description: obj.description,
          price: obj.price,
          /* En esta parte de añade lo del apartado del carrito */
        }
      });
      /*El dispatch sirve para disparar el reducer, ya que el reducer es quien va alterar el estado global de la app*/
      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: productos, //Es la informacion que le manda al reducer para que actualice y es la que se obtuvo del api
      });
    } catch (error) {
      warningAlert('Hubo un error al obtener los prodcutos, por favor refresque la página.');
    }

  }, []);


  /* Función para crear productos se puede colocar form, product etc para representar 
    los valores del formulario */
  const crearProducto = async (form) => {
    try {
      /* Se manda a llamar a la función de crearProductoService que se encuentra dentro de
      el archivo productService la cual mediante el uso de un formulario creará un producto nuevo */
      await crearProductoService(form);
      /* Se ejecuta de neuvo obtener productos para cargar la lista ya con el nuevo 
        producto creado */
      await obtenerProductos();
      succesAlert('¡Producto creado exitosamente!');
    } catch (error) {
      warningAlert('Hubo un error al crear el producto, intente nuevamente');
      console.log(error);
    }
  };

  /* Función para obtener la información de un solo producto de la lista de productos que se tiene*/
  /* Se hace de nueva cuenta el uso de useCallBack para memorizar la función */
  const obtenerProducto = useCallback(async (id) => {
    try {
      const resp = await obtenerProductoService(id);
      //console.log(resp);
      const producto = {
        id: resp.data._id,
        name: resp.data.name,
        description: resp.data.description,
        price: resp.data.price,
      }
      dispatch(
        {
          type: "OBTENER_PRODUCTO",
          payload: producto
        }
      )
    }
    catch (error) {
      warningAlert('Hubo un error al obtener el producto, intente nuevamente');
      console.log(error)
    }
  }, []);

  /* Función para actulizar producto, recibe como parametro el id del producto, y el formulario
     que contiene la información del producto ha actualizar */
  const actualizarProducto = async (id, form) => {
    try {
      await actualizarProductoService(id, form);
      await obtenerProducto(id);
      succesAlert('¡Producto actualizado exitosamente!');
    } catch (error) {
      warningAlert('Hubo un error al actulizar, intente nuevamente');
      console.log(error);
    }
  }

  /* Función para eliminar un producto en base su id, recibe como parametro el id del producto */
  const eliminarProducto = async (id) => {
    try {
      await eliminarProductoService(id);
      /* Se ejecuta de neuvo obtener productos para cargar la lista ya con el nuevo producto creado */
      await obtenerProductos();
      succesAlert('¡Producto eliminado exitosamente!')
    } catch (error) {
      warningAlert('Hubo un error al eliminar, intente nuevamente');
      console.log(error);
    }
  };



  /* Función para agregar un producto a mi carrito de compras */

  const agregarProductoCarrito = (product) => {
    const productoEncontrado = globalState.cart.find(
      (producto) => product.id === producto.id
    );
    //Esta condición se ocupara para no repetir los productos 
    // dentro del carrito en caso de que ya exista
    // pero debería de añadir un contador 
    if (!productoEncontrado) {
      //console.log(product)
      dispatch({
        type: "AGREGAR_PRODUCTO_CARRITO",
        payload: product,
      });
      succesAlert('¡Producto añadido al carrito, exitosamente!')
    } else {
      warningAlert('Este producto ya esta dentro de su carrito de compras.')
    }
  };


  /* Función para eliminar un producto del carrito de compras */
  const eliminarProductoCarrito = (id) => {
    dispatch({
      type: "ELIMINAR_PRODUCTO_CARRITO",
      payload: id,
    });
    succesAlert('Producto eliminado del carrtito');
  }

  const vaciarCarrito = (cart) =>{
    dispatch({
      type: "VACIAR_CARRITO",
      payload: cart,
    });
    succesAlert('Compra realizada con éxtio');
  }

  return (
    <>
      <ProductContext.Provider
        value={{
          products: globalState.products,
          obtenerProductos,
          crearProducto,
          obtenerProducto,
          actualizarProducto,
          product: globalState.product,
          eliminarProducto,
          agregarProductoCarrito,
          cart: globalState.cart,
          eliminarProductoCarrito,
          vaciarCarrito,
        }}

      >
        {children}
      </ProductContext.Provider>
    </>
  )
}

export default ProductState;