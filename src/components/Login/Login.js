import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email'/>
                     </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password'/>
                    </div>
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