import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div className="card max-w-full bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 '>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>

                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length <= 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal"
                        className="btn btn-primary uppercase text-white bg-gradient-to-r from-primary to-secondary my-2">Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;