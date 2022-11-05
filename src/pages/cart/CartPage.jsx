import React, {useState, useContext, useEffect} from "react";
import ProductContext from "../../context/ProductContext";
import Title from "../../components/Title";
import CartList from "../../components/cartComponents/CartList";
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
       <Title titulo="Tú carrito de compras" />
      <section className="h-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-7">
                    {cart.length > 0 ? (
                      <>
                        <CartList />
                      </>
                    ) : (
                      <section className="text-center">
                        <h3>¡No tienes productos aun en tu carrito!</h3>
                      </section>
                    )
                    }
                    </div>
                    <div className="col-lg-5">
                      {cart.length > 0 ? (
                          <>
                            <section className="row pt-1">
                              <article className="col-md-12 text-center">
                                <h2>Total a pagar: ${total} mxn </h2>
                              </article>
                            </section>
                            <section className="row">
                              <article className="col mt-5">
                                <PaypalCheckoutButton
                                  currency={"MXN"}
                                  amount={total}
                                  showSpinner={false}
                                />
                              </article>
                            </section>
                          </>
                        ) : (                            
                              <section className="text-center">
                                  <article>
                                    <h2> ${total} mxn </h2>
                                  </article>
                              </section>)}
                    </div>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      
    


    </>
  )
}

export default CartPage;