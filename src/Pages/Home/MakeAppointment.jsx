import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import TriggerButton from '../Shared/TriggerButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex items-center justify-between my-20'>
            <div className='hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='text-white'>
                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                <h2 className='text-3xl'>Make an appointment Today</h2>
                <p className='w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore vitae consequuntur. Architecto tempore dignissimos quos maxime perspiciatis deserunt maiores, distinctio esse. Sapiente, totam mollitia sint fugit adipisci quidem illum?</p>
                <TriggerButton>Get Started</TriggerButton>
            </div>
        </section>
    );
};

export default MakeAppointment;