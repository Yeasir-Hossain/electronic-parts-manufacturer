/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: `url()`,
            backgroundSize: 'cover'
        }}  className="p-10">
            <div  className='footer'>
                <div>
                    <span  className="footer-title">Products</span>
                    <a  className="link link-hover">Forums</a>
                    <a  className="link link-hover">Blogs</a>
                    <a  className="link link-hover">Affliate</a>
                    <a  className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span  className="footer-title">Company</span>
                    <a  className="link link-hover">About us</a>
                    <a  className="link link-hover">Contact</a>
                </div>
                <div>
                    <span  className="footer-title">Legal</span>
                    <a  className="link link-hover">Terms of use</a>
                    <a  className="link link-hover">Privacy policy</a>
                </div>
            </div>
            <div  className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;