import React from 'react';
import { useQuery } from 'react-query';
import Tool from '../home/Tool';
import Loading from '../shared/Loading';
import Fade from 'react-reveal/Fade';

const Resource = () => {
    const { isLoading, data: products } = useQuery(['product'], () =>
        fetch(`https://stormy-chamber-96171.herokuapp.com/product`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/bg.png')]">
            <Fade right>
                <h1 className='text-3xl text-center'>TOOLS</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center p-12'>
                    {
                        products.map(product => <Tool
                            key={product._id}
                            product={product}
                        >
                        </Tool>)
                    }
                </div>
            </Fade>

        </div>
    );
};

export default Resource;