import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './../Sidebar/Sidebar';
import AppointmentByDate from './../AppointmentByDate/AppointmentByDate';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import { UserContext } from './../../../App';

const Dashboard = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // console.log(loggedInUser)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([]);
    // console.log(loggedInUser)

    // useEffect(() => {
    //     const user = localStorage.getItem("email");
    //     console.log(user)
    //     if (user) {
    //       const foundUser = JSON.parse(user);
    //       setLoggedInUser(foundUser);
    //     }
    //   }, []);


    const handleChangeDate = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        const url = `http://localhost:4400/appointmentsByDate`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: selectedDate, email: localStorage.getItem("email") })
        })
            .then(res => res.json())
            .then(result => setAppointments(result))
    }, [selectedDate])

    return (
        <section className="dashboard-container">
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 mt-3 calendar-section">
                    <h5 className="mb-4">Appointments</h5>
                    <div className="calender-style d-flex justify-content-center align-items-center">
                        <Calendar className="calender" onChange={handleChangeDate} value={new Date()} />
                    </div>
                </div>
                <div className="col-md-5">
                    <AppointmentByDate date={selectedDate} appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;