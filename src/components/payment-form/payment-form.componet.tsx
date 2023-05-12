import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, FormEvent } from "react";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.style";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDeatials = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDeatials)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDeatials,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
        //description: "test description",
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      toast.error(paymentResult.error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment success", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
      <ToastContainer />
    </PaymentFormContainer>
  );
};

export default PaymentForm;
