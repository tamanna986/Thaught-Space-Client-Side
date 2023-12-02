import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log("promise is no", stripePromise)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;