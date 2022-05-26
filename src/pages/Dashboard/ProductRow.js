import React from 'react';

const Productrow = ({ product, index,setDeletingProduct }) => {
    const { name, img,price,quantity } = product
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
            <label onClick={()=>setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
            </td>
        </tr>
    );
};

export default Productrow;