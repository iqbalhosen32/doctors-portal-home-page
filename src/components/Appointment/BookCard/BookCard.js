import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookCard = ({ book, date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center shadow p-3 mb-5 bg-body rounded">
            <div classNameName="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title text-brand">{book.title}</h5>
                    <h6>{book.time}</h6>
                    <small className="card-text text-secondary">{book.space} Spaces Available</small>
                    <br></br>
                    <button onClick={openModal} href="/" className="btn btn-brand mt-3 text-white">Book Appointment</button>
                    <AppointmentForm bookTitle={book.title} modalIsOpen={modalIsOpen} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookCard;