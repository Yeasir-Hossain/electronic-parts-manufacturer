import React from 'react';
import Jump from 'react-reveal/Jump'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='max-h-full'>
            <Jump>
                <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-500 to-black opacity-75 inset-0 z-0 bg-cover ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
                                <div className="relative ">
                                    <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                                        <span>4</span><span>0</span><span>4</span></h1>
                                    <span className="absolute  top-0   -ml-12  text-gray-300 font-semibold">Oops!</span>
                                </div>
                                <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">Page not found</h5>
                                <p className="text-gray-100 mt-2 mb-6">we are sorry, but the page you requested was not found</p>
                                <Link className='text-amber-400' to="/"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Go to Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Jump>

        </div>
    );
};

export default NotFound;