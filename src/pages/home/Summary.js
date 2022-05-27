import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup,faFilterCircleDollar,faRankingStar,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
const Summary = () => {
    return (
        <div className='my-10 '>
            <h1 className='text-2xl text-center mb-2'>Summary</h1>
            <div className='flex justify-center  border-dotted border-t-2 border-b-2 border-amber-500'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        </div>
                        <div className="stat-title">We served</div>
                        <div className="stat-value">100K+</div>
                        <div className="stat-desc">Customers</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faFilterCircleDollar} />
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">120M+</div>
                        <div className="stat-desc">Per annum</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faRankingStar} />
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">33K+</div>
                        <div className="stat-desc">In 1 year</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <div className="stat-title">Tools</div>
                        <div className="stat-value">50+</div>
                        <div className="stat-desc">Buy now</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Summary;