import React from 'react';
import './AppointmentByDate.css'
import AppointmentInfo from './../AppointmentInfo/AppointmentInfo';


const AppointmentByDate = ({ appointments, date }) => {
    // console.log(date)

    return (
        <div>
            <div className="appointmentsByDate text-center">
                <div>
                    <div>
                        <h2 className="p-4 text-brand">Appointments</h2>
                    </div>
                </div>
                {
                    appointments.length ? 
                    <AppointmentInfo appointments={appointments}></AppointmentInfo>
                    :
                    <div className="p-5">
                        <h4 className="lead text-primary">No Appointments For This Date</h4>
                    </div>
                }
            </div>
        </div>
    );
};

export default AppointmentByDate;