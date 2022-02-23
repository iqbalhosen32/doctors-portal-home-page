import React from 'react';
import chair from '../../../images/chair.png';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleChangeDate}) => {
    
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3D4059'}}>Appointment</h1>
                <Calendar onChange={handleChangeDate} value={new Date()} />
            </div>
            
            <div className="col-md-6">
                <img src={chair} alt='' className="img-fluid"></img>
            </div>


        </main>
    );
};

export default AppointmentHeader;