import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
    

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    };

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if(user){
        navigate ('/shop')
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email'/>
                     </div>
                     <br />
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password'/>
                    </div>
                    <p>{error?.message}</p>
                    <br />
                        <input className='form-submit' type="submit" value='login'/>
                </form>
                <p>
                    New to ema-john? <Link className='form-link' to="/signup"> Create an account</Link>
                    </p>
            </div>
        </div>
    );
};

export default Login;