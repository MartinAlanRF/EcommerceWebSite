/* Se importa useReducer para hacer uso del reducer desde productReducer */
import React, {useReducer, useCallback}  from 'react';
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
} from '../services/productServices.js';

/* Se crea el estado inicial de mi objeto Producto */
const initialState = {
    products: [],
    product: {},
}

/* Recibe todos los componentes que se encuentren dentro 
de auth provider */
const ProductState = ({children}) => {
    /* Se impmenta useReducer snipet para poder mandar al estado global 
        la información de los productos    
    */
   /* Ayuda a ejecutar un reducer/dispatch permite utilizar reducers que haya creado */
    const [globalState, dispatch] = useReducer(ProductReducer, initialState);

    const obtenerProductos = useCallback (async() => {
        /* Se llama a la función de ObtenerProductosService dentro del archivo 
            productService
        */
        const resp = await obtenerProductosService();
        /* Con la la data de resp se ocupa la función map 
            Para obtener el arreglo de los objetos que tenmos
        */
       const productos = resp.data.map((obj)=>{
            return {
                id: obj._id,
                name: obj.name,
                description: obj.description,
                price: obj.price,
                /* Se añada el carrito */
            }
        });
        /*El dispatch sirve para disparar el reducer, ya que el reducer
        es quien va alterar el estado global de la app*/
        dispatch({
            type: "OBTENER_PRODUCTOS",
            payload: productos, //Es la informacion que le manda al reducer para que actualice y es la que se
        // obtuveo del api
        });

    },[]);
    

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
        } catch (error) {
        console.log(error);
        }
    };

    const obtenerProducto = useCallback(async (id) =>{
        try{
            const resp = await obtenerProductoService(id);
            console.log(resp);
            const producto = {
                id: resp.data.id,
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
        catch(error){
            console.log(error)
        }  
    },[]);

    return (
        <>
            <ProductContext.Provider
                value={{
                    products: globalState.products,
                    obtenerProductos,
                    crearProducto,
                    obtenerProducto,
                    product: globalState.product,
                }}
        
            >
                {children}
            </ProductContext.Provider>
        </>
  )
}

export default ProductState;