import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


function Donate() {
  const publishableKey =
    "pk_test_51LiDRNGnkLV9x7EnfRVJw77eaU1C30bz1N4dHsGEfiremOruIAdXkQllE3o6h43QDRLYWrmOxJQsbL98sAO3ONd100MqsKKeD1";

  const [product, setProduct] = useState({
    name: "Headphone",
    price: 100,
  });

  const priceForStripe = product.price * 100;

  const MySwal = withReactContent(Swal);

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    });
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was unsuccessful",
      time: 4000,
    });
  };

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/payment",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
    }
  };

  return (
      <StripeCheckout
        stripeKey={publishableKey}
        label="Donate Now"
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
  );
}

export default Donate;
