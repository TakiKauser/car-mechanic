import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('https://gentle-coast-58802.herokuapp.com/services')
            .then(response => response.json())
            .then(jsonData => setServices(jsonData))
    }, [])
    return (
        <div className='container'>
            <h3 className='text-primary my-5'>Services</h3>
            <div className="service-container">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;