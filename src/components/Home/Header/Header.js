import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import BusinessInfo from './../BusinessInfo/BusinessInfo';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div class="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;