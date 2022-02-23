import React, { useState, useEffect } from 'react';
// import doctor from '../../../images/doctor-small.png';
// import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleDoctor from './../SingleDoctor/SingleDoctor';

const Doctors = () => {

    const [doctor, setDoctor] = useState([]);
    console.log(doctor)
    useEffect(() => {
        fetch('http://localhost:4400/addADoctor')
            .then(res => res.json())
            .then(result => setDoctor(result))
    }, [])
    return (
        <div className="text-center">
            <div>
                <h6 className="mt-5 mb-5" style={{ color: '#1CC7C1' }}>OUR DOCTORS</h6>
                <div className="d-flex justify-content-center row">
                    {
                        doctor.map(doctor => <SingleDoctor doctor={doctor}></SingleDoctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;