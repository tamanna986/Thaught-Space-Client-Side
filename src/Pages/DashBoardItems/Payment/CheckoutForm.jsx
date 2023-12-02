// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";



// const CheckoutForm = () => {


//     const [error, setError] = useState('');
//     const [clientSecret, setClientSecret] = useState('')
//     const [transactionId, setTransactionId] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();
//     const axiosSecure =UseAxiosSecure();
//     // const axiosPublic = useAxiosPublic();
//     const { user } = useContext(AuthContext);
//     // const [cart, refetch] = useCart();
//     const navigate = useNavigate();
//   const price = 1000
//     // const totalPrice = amount.reduce((total, item) => total + item.price, 0)

//     useEffect(() => {
       
//         axiosSecure.post('/create-payment-intent', { price })
//                 .then(res => {
//                     console.log(res.data.clientSecret);
//                     setClientSecret(res.data.clientSecret);
//                 })
      

//     }, [axiosSecure])

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement)

//         if (card === null) {
//             return
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             console.log('payment error', error);
//             setError(error.message);
//         }
//         else {
//             console.log('payment method', paymentMethod)
//             setError('');
//         }

//         // confirm payment
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email || 'anonymous',
//                     name: user?.displayName || 'anonymous'
//                 }
//             }
//         })

//         if (confirmError) {
//             console.log('confirm error')
//         }
//         else {
//             console.log('payment intent', paymentIntent)
//             if (paymentIntent.status === 'succeeded') {
//                 console.log('transaction id', paymentIntent.id);
//                 setTransactionId(paymentIntent.id);
                

//                 // now save the payment in the database
//                 // const payment = {
//                 //     email: user.email,
//                 //     price: totalPrice,
//                 //     transactionId: paymentIntent.id,
//                 //     date: new Date(), // utc date convert. use moment js to 
//                 //     cartIds: cart.map(item => item._id),
//                 //     menuItemIds: cart.map(item => item.menuId),
//                 //     status: 'pending'
//                 // }

//                 // const res = await axiosSecure.post('/payments', payment);
//                 // console.log('payment saved', res.data);
//                 // refetch();
//                 // if (res.data?.paymentResult?.insertedId) {
//                 //     Swal.fire({
//                 //         position: "top-end",
//                 //         icon: "success",
//                 //         title: "Thank you for the Payment",
//                 //         showConfirmButton: false,
//                 //         timer: 1500
//                 //     });
//                 //     navigate('/dashboard/paymentHistory')
//                 // }

//             }
//         }

//     }


//     return (
//         <form onSubmit={handleSubmit}>
//         <CardElement
//             options={{
//                 style: {
//                     base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                             color: '#aab7c4',
//                         },
//                     },
//                     invalid: {
//                         color: '#9e2146',
//                     },
//                 },
//             }}
//         />
//         <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
//             Pay
//         </button>
//         <p className="text-red-600">{error}</p>
//         {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
//     </form>
//     );
// };

// export default CheckoutForm;





// trrrrrrrrrrrrrrrrrrrrrrrrrrrrr


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";



const CheckoutForm = () => {


    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure =UseAxiosSecure();
    // const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    // const [cart, refetch] = useCart();
    const navigate = useNavigate();
  const price = 1000
    // const totalPrice = amount.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
       
        axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
      

    }, [axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                
// Update the user's status to 'golden' in the database
axiosSecure.post('/update-user-status', {
    email: user?.email || 'anonymous', // Use the user's email to identify the user
    amount: price // Sending the amount for reference (optional)
})
.then(res => {
    console.log('User status updated to golden:', res.data.updatedUser);
    // Handle success if needed
    if(res.data.updatedUser.modifiedCount === 1){
        Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for the Payment",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/myprofile')
    }
})
.catch(error => {
    console.error('Failed to update user status:', error.message);
    // Handle error if needed
});
                // now save the payment in the database
                // const payment = {
                //     email: user.email,
                //     price: totalPrice,
                //     transactionId: paymentIntent.id,
                //     date: new Date(), // utc date convert. use moment js to 
                //     cartIds: cart.map(item => item._id),
                //     menuItemIds: cart.map(item => item.menuId),
                //     status: 'pending'
                // }

                // const res = await axiosSecure.post('/payments', payment);
                // console.log('payment saved', res.data);
                // refetch();
                // if (res.data?.paymentResult?.insertedId) {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "Thank you for the Payment",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                //     navigate('/dashboard/paymentHistory')
                // }

            }
        }

    }


    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckoutForm;