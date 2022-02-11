import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="mt-5 pt-3 mb-3" style={{height: '70px'}} src={service.img} alt=''></img>
            <h5 className="mb-3" style={{color: '#3D4059' }}>{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;