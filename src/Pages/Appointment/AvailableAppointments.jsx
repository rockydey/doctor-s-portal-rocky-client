import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookingService from './BookingService';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/treatment')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <section className='my-20'>
            <h3 className='text-center text-secondary text-xl mb-10'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <BookingService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></BookingService>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />}
        </section>
    );
};

export default AvailableAppointments;