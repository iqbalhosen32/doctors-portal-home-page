import React from 'react';

const AppointmentDataTable = ({ allPatients }) => {
    return (
        <div>
            <table className="table table-boderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Sr.No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Gender</th>
                        <th className="text-secondary" scope="col">Age</th>
                        <th className="text-secondary" scope="col">Weight</th>
                        <th className="text-secondary" scope="col">Contact</th>
                        <th className="text-secondary" scope="col">Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPatients.map((appointment, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.age}</td>
                                <td>{appointment.weight}</td>
                                <td>{appointment.number}</td>
                                <td>{appointment.email}</td>
                            </tr>
                        )
                    }
                </tbody>


            </table>
        </div>
    );
};

export default AppointmentDataTable;