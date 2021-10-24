import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceBookingId } = useParams();
    return (
        <div>
            <h3>Booking {serviceBookingId} </h3>
        </div>
    );
};

export default Booking;