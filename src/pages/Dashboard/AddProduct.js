import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [addloading, setAddloading] = useState(false)

    const imgStorageKey = 'd7274c5a1d7d29e08b6cec27d3e2d1a0'

    const onSubmit = async data => {
        setAddloading(true)
        const image = data.image[0]
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        quantity: data.quantity,
                        minquantity: data.minquantity,
                        img: image
                    }
                    fetch(`http://localhost:5000/product`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.acknowledged) {
                                setAddloading(false)
                                toast.success("Product added successfully")
                                reset()
                            }
                            else {
                                setAddloading(false)
                                toast.error("Failed to add product")
                            }
                        })
                }
            })
    }


    return (
        <div className='w-full max-w-xs mx-auto'>
            <h2 className="text-2xl text-center mb-5">Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Minimum Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minquantity", {
                            required: {
                                value: true,
                                message: 'Minumum quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                    {
                        addloading && <div className="w-16 h-16 border-b-2 border-amber-900 rounded-full animate-spin mx-auto"></div>

                    }
                </div>
                <input className='btn w-full max-w-xs mt-5' type="submit" value="Add" />
            </form >
        </div >
    );
};

export default AddProduct;