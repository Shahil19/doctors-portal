import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, _id, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot);
        console.log({ name, _id });

        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-6">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-5'>
                        <input disabled value={format(date, 'PP')} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                        <select name='slot' className="select select-info w-full max-w-xs">
                            {
                                slots?.map(slot => <option
                                    key={slot}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" placeholder="Email" name='email' className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input w-full max-w-xs text-white bg-gradient-to-r from-primary to-secondary" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;