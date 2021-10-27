import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceBookingId } = useParams();
    const [service, setService] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceBookingId}`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setService(jsonData));
    }, [serviceBookingId]);
    return (
        <div>
            <h2>Details of {service?.name} </h2>
            <h3>Booking ID: {serviceBookingId} </h3>
        </div>
    );
};

export default Booking;