import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
                <div className='flex items-center'>
                    <div class="avatar ">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h4 className='text-lg'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;