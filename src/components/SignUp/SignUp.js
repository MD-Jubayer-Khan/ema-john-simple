import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswprd] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = (event) =>{
            setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) =>{
        setPasswprd(event.target.value)
    }

    const handleConfirmPasswordBlur = (event) =>{
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("your password and confirm password didn't match")
            return
        }
    }

    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email'/>
                 </div>
                 <br />
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password'/>
                </div>
                    <br />
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm-Password</label>
                     <p>{error}</p>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password'/>
                   
                </div>
                     <br />
                    <input className='form-submit' type="submit" value='Sign up'/>
            </form>
            <p>
                Already have an account? <Link className='form-link' to="/login"> Log in</Link>
                </p>
        </div>
    </div>
    );
};

export default SignUp;