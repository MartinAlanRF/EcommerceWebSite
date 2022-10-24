import React, {useState, useContext, useEffect} from "react";
import ProductContext from "../../context/ProductContext";
import Title from "../../components/Title";
import CartList from "../../components/cart/CartList";
import PaypalCheckoutButton from "../../components/paypal/PaypalCheckoutButton";

const CartPage = () => {
  const { cart } = useContext ( ProductContext )

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal( cart.reduce((acumulador, producto)=> 
        acumulador + producto.price,0
    ))
  }, [cart])

  return (
   <>
      <Title titulo="Carrito de compras" />
      <main className="row pt-5">
        <article className="col-md-12">
          <CartList />
        </article>
      </main>
      {/* Pregunta si la longitud del arreglo de carritto es mayor a 0 
        Si lo es muestra los articulos 
      */}
      {cart.length > 0 ? (
          <>
            <section className="row pt-5">
              <article className="col-md-12">
                <h2>{total}</h2>
              </article>
            </section>
            <section className="row">
              <article className="col">
                <PaypalCheckoutButton
                  currency={"MXN"}
                  amount={total}
                  showSpinner={false}
                />
              </article>
            </section>
          </>
        ) : (
          <section className="row">
            <article className="col">
              <h2>No hay productos en el carrito</h2>
            </article>
          </section>
        )}

    </>
  )
}

export default CartPage