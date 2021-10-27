import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, price, description, img } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p className='px-5 py-3'>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn-secondary d-block w-100 p-2'>Book <span className='text-warning'>{name}</span></button>
            </Link>
        </div>
    );
};

export default Service;