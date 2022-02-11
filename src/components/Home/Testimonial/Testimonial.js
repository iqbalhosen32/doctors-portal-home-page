import React from 'react';
import './Testimonial.css';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import TestimonialPost from './../TestimonialPost/TestimonialPost';

const testimonialData = [
    {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: people1,
        name: 'Winson Herry',
        location: 'California'
    },
    {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: people2,
        name: 'Winson Herry',
        location: 'California'
    },
    {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: people3,
        name: 'Winson Herry',
        location: 'California'
    }
]

const Testimonial = () => {
    return (
        <section className="testimonials mt-5 pt-5">
            <div className="container">
                <div>
                    <h5 className="text-uppercase">Testimonial</h5>
                    <h1>What's Our Patients <br></br> Says</h1>
                </div>
                <div className="row">
                    {
                        testimonialData.map(testData => <TestimonialPost testData={testData}></TestimonialPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;