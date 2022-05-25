import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, "PP")
    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    console.log(services);
    if (isLoading) {
        return <Loading></Loading>
    }

    /* useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [formattedDate]) */


    return (
        <div>
            <h3 className='text-center text-2xl mt-10 text-secondary'>Available Services on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {
                    treatment && <BookingModal
                        treatment={treatment}
                        date={date}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;