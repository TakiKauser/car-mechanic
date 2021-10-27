import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post(`https://gentle-coast-58802.herokuapp.com/services`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service Added Successfully.");
                    reset();
                }
            })
    };
    return (
        <div className='addService-form'>
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <input type="number" {...register("price")} placeholder='Price' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Image URL Link' />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;