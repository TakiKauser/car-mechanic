import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/services`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setServices(jsonData));
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                if (jsonData.deletedCount) {
                    alert("Deleted Successfully");
                    const remainingServices = services.filter(service => service._id !== id);
                    setServices(remainingServices);
                }
            });
    };

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;