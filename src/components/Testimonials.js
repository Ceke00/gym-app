import React from 'react';
import '../components/Testimonials.scss';

const testimonialsData = [
    {
        name: 'Cecilia Egevad',
        review: 'This gym has transformed my life! The trainers are amazing and the atmosphere is very welcoming.',
        image: 'https://avatars.githubusercontent.com/u/97891287?v=4',
    },
    {
        name: 'Viktor Ciganovic',
        review: 'A great place to work out! The facilities are clean and the equipment is top-notch.',
        image: 'https://avatars.githubusercontent.com/u/175490883?v=4',
    },
    {
        name: 'Hasan Iqram',
        review: 'I love the community here. The classes are challenging but fun, and I’ve made great progress.',
        image: 'https://avatars.githubusercontent.com/u/186505497?v=4',
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="text-center">What Our Clients Say</h2>
            <div className="container">
                <div className="row">
                    {testimonialsData.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card testimonial-card">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="card-img-top rounded-circle"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{testimonial.name}</h3>
                                    <p className="card-text">"{testimonial.review}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
