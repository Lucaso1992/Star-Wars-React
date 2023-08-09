import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../services/Authentication';
import { Signup } from '../services/Signup.js';
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

    const handleSingUp = async (e) => {
        e.preventDefault();
        Signup(email, password).then(() => {
            navigate("/");
            setEmail('');
            setPassword('');
        });
    };

    const handleLogIn = async (e) => {
        e.preventDefault();
        Authentication(email, password).then(() => {
            navigate("/");
            setEmail('');
            setPassword('');
            actions.setLoggedIn(true);
        });
    };

    return (
        <div className="container w-25">
            <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Login</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Signup</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <div>
                        <h2 className='text-light'>Login</h2>
                        <form>
                            <div>
                                <label className='text-white'>Email:</label>
                                <input type="email" value={email} onChange={handleEmailChange} required />
                            </div>
                            <div>
                                <label className='text-light'>Password:</label>
                                <input type="password" value={password} onChange={handlePasswordChange} required />
                            </div>
                            <button type="button" onClick={handleLogIn}>Login</button>
                        </form>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <div>
                        <h2 className='text-light'>SignUp</h2>
                        <form>
                            <div>
                                <label className='text-light'>Email:</label>
                                <input type="email" value={email} onChange={handleEmailChange} required />
                            </div>
                            <div>
                                <label className='text-light'>Password:</label>
                                <input type="password" value={password} onChange={handlePasswordChange} required />
                            </div>
                            <button type="button" onClick={handleSingUp}>SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
