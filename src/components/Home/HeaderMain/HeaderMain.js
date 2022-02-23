import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{ height: "600px" }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3D4059' }}>Your New Smile <br /> Start Here</h1>
                <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to="/appointment">
                    <button className="btn btn-brand text-white">GET APPOINTMENT</button>
                </Link>
            </div>

            <div className="col-md-6">
                <img src={chair} alt='' className="img-fluid"></img>
            </div>


        </main>
    );
};

export default HeaderMain;