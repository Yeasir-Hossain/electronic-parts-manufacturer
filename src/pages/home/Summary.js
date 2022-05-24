import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup,faFilterCircleDollar,faRankingStar,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
const Summary = () => {
    return (
        <div className='my-10 '>
            <h1 className='text-2xl text-center mb-2'>Summary</h1>
            <div className='flex justify-center  border-dotted border-t-2 border-b-2 border-amber-500'>
                <div class="stats shadow">

                    <div class="stat">
                        <div class="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        </div>
                        <div class="stat-title">We served</div>
                        <div class="stat-value">100K+</div>
                        <div class="stat-desc">Customers</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faFilterCircleDollar} />
                        </div>
                        <div class="stat-title">Revenue</div>
                        <div class="stat-value">120M+</div>
                        <div class="stat-desc">Per annum</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faRankingStar} />
                        </div>
                        <div class="stat-title">Reviews</div>
                        <div class="stat-value">33K+</div>
                        <div class="stat-desc">In 1 year</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary text-2xl">
                        <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <div class="stat-title">Tools</div>
                        <div class="stat-value">50+</div>
                        <div class="stat-desc">Buy now</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Summary;