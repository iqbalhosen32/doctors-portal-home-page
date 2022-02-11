import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="text-center container">
                <h6 className="mt-5 mb-3" style={{ color: '#1CC7C1' }}>CONTACT US</h6>
                <h2 className="mb-5" style={{ color: '#ffffff' }}>Always Connect With Us</h2>
                <input className="mt-3 email-input" placeholder='Email Address*'></input>
                <br/>
                <input className="mt-3 subject-input" placeholder='Subject*'></input>
                <br/>
                <input className="mt-3 message-input" placeholder='Your Message*'></input>
                <br/>
                <button className="btn mt-3 contact-btn" type="submit">SUBMIT</button>
            </div>
        </section>
    );
};

export default Contact;