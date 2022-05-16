import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting Ipsum has been the',
            image: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting Ipsum has been the',
            image: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting Ipsum has been the',
            image: whitening
        }
    ];

    return (
        <div className='my-20'>
            <div className='text-center mb-10'>
                <h3 className='text-primary text-lg font-semibold uppercase'>OUR SERVICES</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;