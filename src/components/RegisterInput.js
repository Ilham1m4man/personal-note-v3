import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../utils/useInput';
import LocaleContext from '../contexts/LocaleContext';

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPass, onConfirmPassChange] = useInput('');

    const { locale } = React.useContext(LocaleContext);

    function onSubmitHandler(event) {
        event.preventDefault();
        if (password !== confirmPass) {
            return alert(locale === 'id' ? "Password dan Konfirmasi Password harus sama!" : "Password and Confirm Password form must be same!")
        } else {
            return (
                register({
                    name: name,
                    email: email,
                    password: password,
                    confirmPass: confirmPass,
                })
            );
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='input-register'>
            <label htmlFor="name">{locale === 'id' ? 'Nama' : 'Name'}</label><br></br>
            <input type="text" name="name" value={name} onChange={onNameChange} required />
            <label htmlFor="email">Email</label><br></br>
            <input type="email" name="email" value={email} onChange={onEmailChange} required />
            <label htmlFor="password">Password</label><br></br>
            <input type="password" name="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} required minLength={6} />
            <label htmlFor="confirmPass">{locale === 'id' ? 'Konfirmasi Password' : 'Confirm Password'}</label><br></br>
            <input type="password" name="confirmPass" autoComplete='current-password' value={confirmPass} onChange={onConfirmPassChange} required />
            <button>{locale === 'id' ? 'Daftar' : 'Register'}</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;