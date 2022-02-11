import React from 'react';
import doctor from '../../../images/doctor-small.png';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctors = () => {
    return (
        <div className="text-center">
            <div>
                <h6 className="mt-5 mb-3" style={{ color: '#1CC7C1' }}>OUR DOCTORS</h6>
                <div className="d-flex justify-content-center">
                    <div className="m-5">
                        <img style={{ width: '220px' }} src={doctor} alt=''></img>
                        <h6>Dr. Caudi</h6>
                        <FontAwesomeIcon style={{ color: '#14D1CA', width: '13px' }} icon={faPhone}></FontAwesomeIcon> <small className="text-secondary">+13 2456789</small>
                    </div>
                    <div className="m-5">
                        <img style={{ width: '220px' }} src={doctor} alt=''></img>
                        <h6>Dr. Caudi</h6>
                        <FontAwesomeIcon style={{ color: '#14D1CA', width: '13px' }} icon={faPhone}></FontAwesomeIcon> <small className="text-secondary">+13 2456789</small>
                    </div>
                    <div className="m-5">
                        <img style={{ width: '220px' }} src={doctor} alt=''></img>
                        <h6>Dr. Caudi</h6>
                        <FontAwesomeIcon style={{ color: '#14D1CA', width: '13px' }} icon={faPhone}></FontAwesomeIcon> <small className="text-secondary">+13 2456789</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;