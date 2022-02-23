import React from 'react';
import { faClock, faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleDoctor = ({doctor}) => {
    return (
        <div className="col-md-4">
            <img style={{ width: '200px', height: '200px' }} className="img-fluid mb-5" src={`data:image/png;base64,${doctor.image}`} alt=""></img>
            <h1>{doctor.name}</h1>
            <FontAwesomeIcon style={{ width: '15px'}} icon={faEnvelope}/><span> {doctor.email}</span>
        </div>
    );
};

export default SingleDoctor;