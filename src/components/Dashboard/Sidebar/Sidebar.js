import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarCheck, faGripHorizontal, faClipboard, faCog, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'

const Sidebar = () => {
    const [isDoctor, setIsDoctor] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4400/isDoctor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem("email") })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])



    return (
        <div className="sidebar d-flex flex-column">
            <div className="sidebar-container">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/dashboard" className="text-white text-decoration-none font-weight-bold">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span className="">Dashboard</span>
                        </Link>
                    </li>
                    {
                        isDoctor &&
                        <div>
                            <li>
                                <Link to="/dashboard/appointment" className="text-white text-decoration-none">
                                    <FontAwesomeIcon icon={faCalendarCheck} /> <span>Appointment</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/all-patients" className="text-white text-decoration-none">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/prescriptions" className="text-white text-decoration-none">
                                    <FontAwesomeIcon icon={faClipboard} /> <span>Prescriptions</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/add-a-doctor" className="text-white text-decoration-none">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add a Doctor</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/doctor/setting" className="text-white text-decoration-none">
                                    <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                                </Link>
                            </li>
                        </div>}

                </ul>

            </div>
        </div>
    );
};

export default Sidebar;