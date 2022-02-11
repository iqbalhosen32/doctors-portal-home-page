import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from './../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took '
    },
    {
        title: 'Cavity Filling',
        img: cavity,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took '
    },
    {
        title: 'Teeth Whitening',
        img: whitening,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took '
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center">
                <h6 className="mt-5 mb-3" style={{ color: '#1CC7C1' }}>OUR SERVICES</h6>
                <h2 style={{ color: '#3D4059' }}>Services We Provides</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;