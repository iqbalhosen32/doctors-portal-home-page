import React from 'react';
import Header from '../Header/Header';
import Services from './../Services/Services';
import Exceptional from './../Exceptional/Exceptional';
import Appointment from './../Appointment/Appointment';
import Testimonial from './../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from './../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;