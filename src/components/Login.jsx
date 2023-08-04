import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Authentication from '../services/Authentication';
import {Signup} from '../services/Signup.js';
import useAppContext from '../context/AppContext'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actions, store } = useAppContext();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Signup(email, password).then(() => {navigate("/");
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');
    });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit">Registrarse</button>
                {/* <button type="submit">Registrarse</button> */}
            </form>
        </div>
    );
    };

export default Login;
