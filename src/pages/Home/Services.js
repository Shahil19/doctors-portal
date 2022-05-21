import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        { _id: 1, name: 'Fluoride Treatment', description: '', img: fluoride },
        { _id: 2, name: 'Cavity Filling', description: '', img: cavity },
        { _id: 3, name: 'Teeth Whitening', description: '', img: teeth },
    ]
    // console.log(services[1].img);
    return (
        <div>
            <div className='text-center mb-10'>
                <h4 className='text-xl text-primary font-semibold '>Our Services</h4>
                <h2 className=' text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;