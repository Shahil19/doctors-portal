import React from 'react';
import chair from '../../../assets/images/chair.png'
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment';
import Services from '../Services';
import Testimonial from '../Testimonial';
const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;