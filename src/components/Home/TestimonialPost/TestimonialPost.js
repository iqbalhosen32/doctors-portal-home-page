import React from 'react';
import './TestimonialPost.css'

const TestimonialPost = ({ testData }) => {
    return (
        <div className="col-md-4 shadow p-3 mb-5 bg-white rounded single-testimonial">
            <div className="container">
                <p>{testData.description}</p>
                <div className="d-flex mt-5">
                    <div>
                        <img style={{ width: '55px' }} src={testData.img} alt=""></img>
                    </div>
                    <div className="ms-3">
                        <h6 style={{ color: '#1CC7C1' }}>{testData.name}</h6>
                        <small className="text-secondary">{testData.location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialPost;