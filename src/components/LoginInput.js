import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../utils/useInput';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();

        login({
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='input-login'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' value={password} onChange={onPasswordChange} />
            <button type='submit'>Login</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
} 

export default LoginInput;