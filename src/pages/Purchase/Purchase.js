import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import Fade from 'react-reveal/Fade';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [purchaseQuantity, setPurchaseQuantity] = useState('')
    const [btnDisable, setBtnDisable] = useState(true)
    const { register, handleSubmit } = useForm();
    const url = `http://localhost:5000/product/${id}`
    const { data: product, isLoading, refetch } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const {name, img, description, price, quantity, minquantity } = product
    let newQuantity;
    const handleButton = (event) => {
        setPurchaseQuantity(event.target.value)
        if (parseInt(purchaseQuantity) >= minquantity && parseInt(purchaseQuantity) <= quantity) {
            setBtnDisable(false)
        }
        else
            setBtnDisable(true)
    }
    const onSubmit = (data) => {
        const booking = {
            product:name,
            quantity:purchaseQuantity,
            email:data.email,
            address:data?.address,
            phone:data?.phone
        }
        newQuantity = quantity - purchaseQuantity
        console.log(newQuantity);
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ newQuantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount){
                    toast.success("Order Placed Successsfully")
                    refetch()
                    fetch(`http://localhost:5000/booking`,{
                        method:"POST",
                        headers: {
                            "content-type": "application/json",
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(booking),
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                    })
                }
                else{
                    toast.error("Cannot Place order.Please try again.")
                }
            })
    }


    return (
        <div>
            <h1 className="text-3xl text-center">Purchase</h1>
            <Fade left>
                <div class="hero min-h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/bg.png')]">
                    <div class="hero-content flex-col lg:flex-row">
                        <img className='w-[600px] rounded' src={img} alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">{name}</h1>
                            <p class="py-6">Description:{description}</p>
                            <p>Price:{price}</p>
                            <p>Available:{quantity}</p>
                            <p>Minimum Quantity for order:{minquantity}</p>
                            <div class="bg-transparent mx-auto rounded-2xl w-100 ">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="number" placeholder='Quantity' onInput={handleButton} onKeyUpCapture={handleButton} onKeyDownCapture={handleButton} class="input input-bordered w-full max-w-xs" />
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input disabled
                                            readOnly
                                            type="email"
                                            placeholder="Your Email"
                                            value={user?.email}
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email")}
                                        />
                                        <label className="label">

                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("address")}
                                        />
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("phone")}
                                        />
                                    </div>
                                    <input disabled={btnDisable} className='btn w-full max-w-xs my-5 text-white' type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Purchase;