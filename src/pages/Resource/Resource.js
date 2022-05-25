import React from 'react';
import { useQuery } from 'react-query';
import Tool from '../home/Tool';
import Loading from '../shared/Loading';

const Resource = () => {
    const { isLoading, data: products } = useQuery(['product'], () =>
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>TOOLS</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center p-12'>
                {
                    products.map(product=><Tool
                    key={product._id}
                    product={product}
                    >
                    </Tool>)
                }
            </div>
        </div>
    );
};

export default Resource;