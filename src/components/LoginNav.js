import React from 'react';
import PropTypes from 'prop-types';
import ThemeButton from './buttons/ThemeButton';
import { BsTranslate } from 'react-icons/bs';
import LocaleContext from '../contexts/LocaleContext';

function LoginNav() {
    const { locale, toggleLocale } = React.useContext(LocaleContext);
    return (
        <nav className="navigation">
            <ul>
                <li><button className="toggle-locale" type="button" onClick={toggleLocale} title={locale === 'id' ? 'Indonesia' : 'English'}><BsTranslate /></button></li>
                <li><ThemeButton /></li>
            </ul>
        </nav>
    )
}

LoginNav.propTypes = {
    logout: PropTypes.func,
    name: PropTypes.string,
};

export default LoginNav;