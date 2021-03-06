import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section className='text-white flex justify-center items-center mb-10 mt-[150px]' style={{ background: `url(${appointment})` }}>
            <div className='mt-[-100px] flex-1 hidden lg:block'>
                <img src={doctor}></img>
            </div>
            <div className='flex-1 p-10 lg:p-2'>
                <h4 className='uppercase text-xl text-primary'>Make Appointment</h4>
                <h2 className='text-4xl'>Make an appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;