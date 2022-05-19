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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary text-center mb-6">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-5'>
                        <input disabled value={format(date, 'PP')} type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <select name='slot' class="select select-info w-full max-w-xs">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Name" name='name' class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" placeholder="Email" name='email' class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" name='phone' class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="Submit" class="input w-full max-w-xs text-white bg-gradient-to-r from-primary to-secondary" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;