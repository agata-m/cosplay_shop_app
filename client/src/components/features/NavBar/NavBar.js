import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.scss';

class NavBar extends React.Component {
    render() {
        return (
            <nav styles={styles} className='navbar'>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
                <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
                <NavLink exact to='/termsofuse' activeClassName='active'>Terms of use</NavLink>
            </nav>
        );
    }
};

export default NavBar;