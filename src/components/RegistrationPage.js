import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setlasName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegistration = () => {
        localStorage.setItem('username', username);
        // localStorage.setItem('password', password);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);

        history.push('/login');
    };

    return (
        <div>
            <h2>Registration Page</h2>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="firstName"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="LastName"
                    value={lastName}
                    onChange={(e) => setlasName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default RegistrationPage;
