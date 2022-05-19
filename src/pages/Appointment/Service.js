import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service
    return (
        <div class="card max-w-full bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="card-title justify-center">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 '>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>

                <div class="card-actions justify-center">
                    <label
                        disabled={slots.length <= 0}
                        onClick={() => setTreatment(service)}
                        for="booking-modal"
                        class="btn btn-primary uppercase text-white bg-gradient-to-r from-primary to-secondary my-2">Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;