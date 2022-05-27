import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ product }) => {
    const { _id, name, price, img } = product
    return (
        <div className="card lg:card-side shadow-xl">
            <figure><img className='w-52 h-52' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}!</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn">Order</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Tool;