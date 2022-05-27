import React from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img className='w-[700px] rounded-2xl opacity-80' src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFkdS1zQldNTkwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
          <div>
            <h1 class="text-6xl font-bold">GET THE</h1>
            <h1 class="text-3xl text-amber-500 font-bold">BEST TOOLS</h1>
            <p class="py-6">We provide 100% original products to our customers for more than 3 years</p>
            <Link to={'/resource'}><button class="btn">Shop now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BuyNow;