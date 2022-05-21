import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div>
                <div className="avatar flex justify-start items-center mx-8 mb-8">
                    <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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