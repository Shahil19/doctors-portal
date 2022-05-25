import { format } from 'date-fns';
import React from 'react';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    // get user
    const [user] = useAuthState(auth);

    const { name, _id, slots } = treatment;
    const formattedDate = format(date, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value

        const booking = {
            treatment: name,
            treatmentId: _id,
            slot,
            date: formattedDate,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value
        }

        // send booking info to backend
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast(`🦄 ${name} booked!!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.error(data.result, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                // refetch to auto fetch when order booked
                refetch()
                // close the modal when submit
                setTreatment(null)
            })
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
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} disabled name='name' className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" value={user?.email} disabled name='email' className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input w-full max-w-xs text-white bg-gradient-to-r from-primary to-secondary" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;