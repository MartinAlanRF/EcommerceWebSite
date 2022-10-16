const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      /* Se tiene que retornar un objeto */
      return {
        ...globalState,
        products: action.payload,
      };
    case "OBTENER_PRODUCTO":
      /* Se tiene que retornar un objeto */
      return {
        ...globalState, //hace una copia de como esta mi estado
        product: action.payload,
      };
    case "AGREGAR_PRODUCTO_CARRITO":
      /* Se tiene que retornar un objeto */
      return {
        ...globalState, //hace una copia de como esta mi estado
        cart: [...globalState.cart, action.payload]
      };
    
    case "ELIMINAR_PRODUCTO_CARRITO":
      /* Se tiene que retornar un objeto */
    return {
      ...globalState,
      /* Se ocupo filter para filtrar las listas */
      cart: globalState.cart.filter( (producto)=> producto.id !== action.payload)
    };

    default:
      return globalState;
  }
};

export default reducer;
