import React from 'react';
import PropTypes from 'prop-types';
import ThemeButton from './buttons/ThemeButton';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { BsTranslate } from 'react-icons/bs';
import { archivePath, homePath } from '../utils/path-name';
import LocaleContext from '../contexts/LocaleContext';

function Navigation({ logout, name }) {
    const { locale, toggleLocale } = React.useContext(LocaleContext);
    return (
        <nav className="navigation">
            <ul>
                <li><Link to={archivePath}>{locale === 'id' ? 'Arsip' : 'Archive'}</Link></li>
                <li><button className="toggle-locale" type="button" onClick={toggleLocale} title={locale === 'id' ? 'Indonesia' : 'English'}><BsTranslate /></button></li>
                <li><ThemeButton /></li>
                <li>
                    <Link to={homePath}>
                        <button className="button-logout" type="button" onClick={logout} title={locale === 'id' ? 'Keluar' : 'Log out'}><FiLogOut /> {name}</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func,
    name: PropTypes.string,
};

export default Navigation;