import React from 'react';
import BookCard from './../BookCard/BookCard';

const bookingData = [
    {
        id: '111',
        title: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
    {
        id: '112',
        title: 'Teeth Cavity',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
    {
        id: '113',
        title: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
    {
        id: '114',
        title: 'Teeth Cavity',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
    {
        id: '115',
        title: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
    {
        id: '116',
        title: 'Teeth Cavity',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h1 className="text-center text-brand mb-5">Appointment Available On {date.toDateString()}</h1>
            <div className="row">
                {
                    bookingData.map(booking => <BookCard key={booking.id} date={date} book={booking}></BookCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;