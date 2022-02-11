import React from 'react';
import doctor from '../../../images/doctor.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=''></img>
                    </div>
                    <div className="col-md-7 text-white py-5 hhhh">
                        <h6 style={{ color: '#1CC7C1' }}>APPOINTMENT</h6>
                        <h1 className="my-4">Make an Appointment <br /> Today</h1>
                        <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        <button style={{ backgroundColor: '#1CC7C1', color: 'white' }} className="btn mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;