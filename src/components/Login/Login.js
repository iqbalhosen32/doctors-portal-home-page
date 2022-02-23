import React, { useState, useEffect } from 'react';
import './Login.css';
import { auth } from './firebase.config.js';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Login = ({signInWithGoogle}) => {

    


    return (
        <div className="row d-flex justify-content-center">
            <div className="text-center d-flex align-items-center col-md-6">
                <div className="ms-5 login-section">
                    <div>
                        {/* <h3>User {user.displayName} </h3> */}
                    </div>
                    <h6 className="text-secondary">Login</h6>
                    <form>
                        <input type="email" placeholder="Your Email"></input>
                        <br></br>
                        <input type="password" placeholder="Password"></input>
                    </form>
                    <button className="btn btn-brand text-white mt-5" onClick={signInWithGoogle}>Google Sign-in</button>

                    <h1>{localStorage.getItem("name")}</h1>
                    <h1>{localStorage.getItem("email")}</h1>
                    <img src={localStorage.getItem("profilePic")} alt=""/>
                </div>
            </div>
            <div className="login-bg"></div>
        </div>
    );
};

export default Login;