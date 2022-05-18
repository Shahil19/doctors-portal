import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mb-10 lg:px-10'>
            <InfoCard cardTitle='Opening Hour' img={clock} bgClass='bg-gradient-to-r from-primary to-secondary'></InfoCard>
            <InfoCard cardTitle='Visit Us' img={marker} bgClass='bg-accent'></InfoCard>
            <InfoCard cardTitle='Contact Us' img={phone} bgClass='bg-gradient-to-r from-primary to-secondary'></InfoCard>
        </div>
    );
};

export default Info;