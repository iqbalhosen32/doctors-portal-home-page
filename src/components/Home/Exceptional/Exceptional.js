import React from 'react';
import treatment from '../../../images/treatment.png'
import './Exceptional.css'

const Exceptional = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5 mb-3">
                <div className="col-md-5">
                    <img className="treatment-img" src={treatment} alt=''></img>
                </div>
                <div className="col-md-7 mt-5">
                    <h1 style={{ color: '#3D4059' }}>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="text-secondary mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button style={{ backgroundColor: '#1CC7C1', color: 'white' }} className="btn mt-3">Learn More</button>
                </div>
            </div>
        </div>

    );
};

export default Exceptional;