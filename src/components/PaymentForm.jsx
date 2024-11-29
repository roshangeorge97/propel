import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your-stripe-public-key");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/payment", { amount, currency: "usd" });

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
      alert("Payment Failed: " + result.error.message);
    } else {
      alert("Payment Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount (USD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;
