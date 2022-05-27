import React from 'react';
import Fade from 'react-reveal/Fade';

const Aboutus = () => {
    return (
        <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/bg.png')]">
            <Fade left>
                <h1 className='text-3xl text-center'>About</h1>
                <div className='my-10 px-10 grid grid-cols-2'>
                    <div className='justify-items-start'>
                        <h2 className='text-xl'>Address:</h2>
                        <p>Adabor-2</p>
                        <p>Mohammadpur,Dhaka</p>
                        <p>Contact no.: 01970851626</p>
                    </div>
                    <div className='justify-items-center'>
                        <h2 className="text-xl">Our Delivery System:</h2>
                        <p>After payment out products are shipped from china then it takes about 1 month to reach our cutomer</p>
                    </div>
                </div>
                <div className=' my-10'>
                    <h1 className="text-2xl text-center my-5">Contact Us</h1>
                    <form className="max-w-lg mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="btn shadow font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                            </div>
                            <div className="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </Fade>


        </div>
    );
};

export default Aboutus;