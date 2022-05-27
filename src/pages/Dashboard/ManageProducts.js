import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import Productrow from './ProductRow';


const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const { isLoading, data: products, refetch } = useQuery(['products'], () =>
        fetch(`https://stormy-chamber-96171.herokuapp.com/product`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl text-center">Manage Products</h1>
            <h1 className="text-xl text-center">Total Products:  {products.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <Productrow
                                key={product._id}
                                index={index}
                                product={product}
                                setDeletingProduct={setDeletingProduct}
                            >
                            </Productrow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirm
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            >
            </DeleteConfirm>}
        </div>
    );
};

export default ManageProducts;