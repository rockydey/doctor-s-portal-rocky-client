import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: 'Dhaka'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: 'Dhaka'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: 'Dhaka'
        }
    ];

    return (
        <section>
            <div className='flex justify-between mb-10'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;