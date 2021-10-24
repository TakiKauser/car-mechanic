import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className=''>
            <img src={notFound} alt="404" width="100%" />
            <Link to="/"><button className='btn-danger'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;