import React, { useEffect } from 'react';
import { Fade } from 'react-reveal';
import useReviews from '../../hooks/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews([])
    return (
        <Fade left cascade>
            <div className='w-full m-5 p-5'>
                <h1 className='text-2xl text-center mb-5'>Reviews</h1>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        reviews.map(review => <div class="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img  className='opacity-20' src="https://www.metabo.com/com/out/pictures/master/product/1/mag-32-0063500s_51.jpg" alt="drill machine img" /></figure>
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

export default Review;