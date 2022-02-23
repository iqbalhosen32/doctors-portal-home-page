import React from 'react';
import './FooterCol.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrands, faFacebook } from '@fortawesome/free-solid-svg-icons';

const FooterCol = ({footer}) => {
    return (
        <div className="col-md-3 p-5">
            <div className="footer-container">
                <h6 className="mt-5 mb-3" style={{ color: '#1CC7C1', height: '35px' }}>{footer.title}</h6>
                <p href="/">{footer.sl1}</p>
                <p href="/">{footer.sl2}</p>
                <p href="/">{footer.sl3}</p>
                <p href="/">{footer.sl4}</p>
                <p href="/">{footer.sl5}</p>
                <p href="/">{footer.sl6}</p>
            </div>
        </div>
    );
};

export default FooterCol;