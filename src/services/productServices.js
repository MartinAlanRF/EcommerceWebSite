/* Se importa axios para consumir mi apiBackEnd en mongoDB */
import axios from "axios";

/* Se define la url del api */
const URL = "https://apimongonodejs.onrender.com/api/products";
/* url para pruebas con un api en modo local */

/* Constante para añadir el token al header y verificar */
const ConfigHeader =     {
    headers: {
      "auth-token": localStorage.getItem("token"),
    }
}

/* Serivices es el documento para poder hacer uso de las 
acciones de mi api get,post,delete y update */

// RUTA GET PARA OBTENER LA LISTA DE PRODUCTOS DENTRO DE LA BD
export const obtenerProductosService = async () => {
    const resp = await axios.get(URL,ConfigHeader);
    /* El data en la respueta de axios es todo el data de nuestra respuesta del 
    backEnd */
    return resp.data;
};

// RUTA POST PARA CREAR UN NUEVO PRODUCTO
export const crearProductoService = async (form) => {
    const resp = await axios.post(URL,form,ConfigHeader);   
    return resp.data;
};

// RUTA PARA OBTENER LA INFORMACIÓN DE UN PRODUCTO
export const obtenerProductoService = async (id)=>{
    const resp = await axios.get(`${URL}/${id}`,ConfigHeader);
    return resp.data;
} ;


