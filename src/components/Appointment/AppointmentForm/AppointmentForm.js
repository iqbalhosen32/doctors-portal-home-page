import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '700px',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, bookTitle, date }) => {

    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        data.service = bookTitle;
        data.date = date;
        data.created = new Date()

        const url = `http://localhost:4400/addAppointment`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
                closeModal();
                alert('Success')
        })
        
    }

    return (
        <div className="form-container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand text-center">{bookTitle}</h2>
                <p className=" text-center mb-5">Date: {date.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" {...register('name', { required: true })}/>
                        </div>
                        <div className="form-group">
                            <input type="phone" name="phone" className="form-control" placeholder="Your Number" {...register('number', { required: true })}/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Your Email" {...register('email', { required: true })}/>
                        </div>
                    </div>
                    <div className="d-flex form-row">
                        <div className="form-group col-md-4">
                            <select className="form-control" name="gender" {...register('gender', { required: true })}>
                                <option disabled={true} value="Choose Gender">Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="number" placeholder="Your Age" className="form-control" id="inputCity" {...register('age', { required: true })}/>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="number" placeholder="Weight" className="form-control" id="inputCity" {...register('weight', { required: true })}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-brand text-white">Submit</button>
                </form>
                
            </Modal>
        </div>
    );
};

export default AppointmentForm;