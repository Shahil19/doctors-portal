import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        { _id: 1, name: 'Will Smith', description: '', img: people1 },
        { _id: 2, name: 'Rock Smith', description: '', img: people2 },
        { _id: 3, name: 'Sam Smith', description: '', img: people3 },
    ]
    return (
        <div className='container mx-auto px-10 md:px-0 lg:px-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-primary uppercase'>Testimonial</h4>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img style={{ maxWidth: '50%', marginLeft: 'auto' }} src={quote}></img>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;