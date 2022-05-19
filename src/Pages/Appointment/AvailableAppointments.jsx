import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import BookingService from './BookingService';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='my-20'>
            <h3 className='text-center text-secondary text-xl mb-10'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services?.map(service => <BookingService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></BookingService>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch} />}
        </section>
    );
};

export default AvailableAppointments;