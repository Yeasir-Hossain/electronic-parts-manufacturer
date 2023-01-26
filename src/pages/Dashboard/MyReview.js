import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Fade } from 'react-reveal';
import auth from '../../firebase.init';

const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const [user] = useAuthState(auth)

    const { email } = user
    useEffect(() => {
        fetch(`https://electronics-lab.onrender.com/reviews?email=${email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [email])
    return (
        <Fade left cascade>
            <div className='w-full'>
                <h1 className='text-2xl text-center mb-5'>My Reviews</h1>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        reviews.map(review => <div class="card bg-base-100 shadow-xl image-full">
                            <figure><img className='opacity-20' src="https://www.metabo.com/com/out/pictures/master/product/1/mag-32-0063500s_51.jpg" alt="drill machine img" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{review.name}</h2>
                                <p>{review.feedback}</p>
                                <div class="card-actions justify-end">
                                    <p>Rated {review.rating} stars</p>
                                </div>
                            </div>
                        </div>)
                    }</div>
            </div>
        </Fade>

    );
};

export default MyReview;