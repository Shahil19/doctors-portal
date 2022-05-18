import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{review.name}</h2>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div>
                <div class="avatar flex justify-start items-center mx-8 mb-8">
                    <div class=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img style={{ maxWidth: '75px' }} src={review.img} />
                    </div>
                    <div className='ml-4'>
                        <h4>{review.name}</h4>
                        <p>California, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;