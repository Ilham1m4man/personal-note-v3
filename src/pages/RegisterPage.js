import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import { homePath } from '../utils/path-name';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
    const navigate = useNavigate();

    const { locale } = React.useContext(LocaleContext);

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate(homePath);
        }
    }

    return (
        <section className='register-page'>
            <h2 style={{ fontWeight: 'bold' }}>{locale === 'id' ? 'Isi form untuk mendaftar akun' : 'Fill the form to register account'}</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>{locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to={homePath}>{locale === 'id' ? 'Masuk' : 'Login'}</Link></p>
        </section>
    )
}

export default RegisterPage;