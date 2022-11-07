import { useEffect, useContext } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
/* Importando sweetalert */
import Swal from 'sweetalert2';
import ProductContext from "../../context/ProductContext";
// This values are the props in the UI
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypalCheckoutButton = ({ currency, amount, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  const succesAlert = async (message) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      //position: 'center',
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
  
  const { cart, vaciarCarrito } = useContext (ProductContext)

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              console.log("Orden de compra: " + orderId);
              succesAlert('Orden de compra');
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            console.log("Compra realizada");
            vaciarCarrito(cart);
            succesAlert('Compra realizada');
          });
        }}
      />
    </>
  );
};

export default PaypalCheckoutButton;
