import React from 'react';
import './Footer.css'
import FooterCol from './../FooterCol/FooterCol';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const footerData = [
    {
        title: '',
        sl1: 'Emergency Dental Care',
        sl2: 'Emergency Dental Care',
        sl3: 'Emergency Dental Care',
        sl4: ' ',
        sl5: ' ',
        sl6: ' ',
    },
    {
        title: 'Services',
        sl1: 'Emergency Dental Care',
        sl2: 'Emergency Dental Care',
        sl3: 'Emergency Dental Care',
        sl4: 'Emergency Dental Care',
        sl5: 'Emergency Dental Care',
        sl6: 'Emergency Dental Care',
    },
    {
        title: 'Services',
        sl1: 'Emergency Dental Care',
        sl2: 'Emergency Dental Care',
        sl3: 'Emergency Dental Care',
        sl4: 'Emergency Dental Care',
        sl5: 'Emergency Dental Care',
        sl6: 'Emergency Dental Care',
    },
    {
        title: 'Services',
        sl1: 'Emergency Dental Care',
        icon: '',
    }
]

const Footer = () => {
    return (
        <section className="d-flex footer-container justify-content-center">
            <div>
                <div className="row">
                    {
                        footerData.map(footer => <FooterCol footer={footer}></FooterCol>)
                    }
                </div>
                <footer className="text-secondary text-center p-5">
                    <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
                </footer>
            </div>
        </section>
    );
};

export default Footer;