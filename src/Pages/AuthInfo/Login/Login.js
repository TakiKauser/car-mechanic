import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Log In</h2>
            <button className='btn-primary' onClick={signInUsingGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;