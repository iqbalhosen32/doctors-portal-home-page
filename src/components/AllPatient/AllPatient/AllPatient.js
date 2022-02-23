import React, { useEffect, useState } from 'react';
import './AllPatient.css';
import Sidebar from './../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from './../AppointmentDataTable/AppointmentDataTable';

const AllPatient = () => {
    const [allPatients, setAllPatients] = useState([]);
    // console.log(allPatients)

    useEffect(() => {
        fetch('http://localhost:4400/allPatients')
            .then(res => res.json())
            .then(data => setAllPatients(data))
    }, [])
    return (
        <section className="allPatients-container">
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h5 className="mt-3">Patients</h5>
                    <div className="mt-5 dataTable-section">
                        <h5 className="text-brand">All Patients</h5>
                        <AppointmentDataTable allPatients={allPatients}></AppointmentDataTable>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllPatient;