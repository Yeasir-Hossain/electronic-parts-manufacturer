import React from 'react';
import bike from '../../assets/images/bikehub.png'
import writer from '../../assets/images/writer.png'
import headphone from '../../assets/images/headphone.png'
import me from '../../assets/images/743.JPG'
import Fade from 'react-reveal/Fade';
const Portfolio = () => {
    return (
        <div>
            <Fade left>
                <h1 className="text-3xl text-center">Portfolio</h1>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img className='w-96 rounded-xl' src={me} alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Yeasir Hossain</h1>
                            <p class="py-6">I am currently studying Computer Science and Enginnering (Final year) at Bangladesh Army University of Science and  Technology</p>
                            <p className="text-xl">Skills:</p>
                            <p>1. HTML</p>
                            <p>2. CSS</p>
                            <p>3. Javascript</p>
                            <p>4. React</p>
                            <p>5. MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div class="card shadow-xl image-full">
                        <figure><img src={bike} alt="bike" /></figure>
                        <div class="card-body">
                            <h2 class="card-title justify-end">Bike Hub</h2>
                            <div class="card-actions justify-end">
                                <a href="https://bike-hub-b9899.web.app/"><button class="btn btn-ghost">Visit</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-xl image-full">
                        <figure><img src={writer} alt="Writer" /></figure>
                        <div class="card-body">
                            <h2 class="card-title justify-end">The Writer</h2>
                            <div class="card-actions justify-end">
                                <a href="https://isp-website-for-writer.web.app/"><button class="btn btn-ghost">Visit</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-xl  image-full">
                        <figure><img src={headphone} alt="Headphone" /></figure>
                        <div class="card-body">
                            <h2 class="card-title justify-end">Headphone Hub</h2>
                            <div class="card-actions justify-end">
                                <a href="https://product-analysis-website-ph-9.netlify.app/"><button class="btn btn-ghost">Visit</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default Portfolio;