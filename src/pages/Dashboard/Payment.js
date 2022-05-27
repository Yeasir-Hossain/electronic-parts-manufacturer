import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2JYBLXCe1IOSg90uaxfufF8i7YCfjJVJ3FSaIoYWRJhZAvx8XbgeBD1POl53cWQ2uzEjXz0giqyzidDiebDF3r00Xh7cnU0H');

const Payment = () => {
    const { id } = useParams()
    const url = `https://stormy-chamber-96171.herokuapp.com/booking/${id}`

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card w-50 max-w-md shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <p className="text-success text-xl font-bold">Hello {order.email}</p>
                    <h2 className="card-title">Please pay for {order.product}</h2>
                    <p>Please pay: $ {order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;