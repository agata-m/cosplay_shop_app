import React from 'react';

import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.scss';

class NavBar extends React.Component {

    state = {
        links: [
            { path: '/', title: 'Home' },
            { path: '/faq', title: 'FAQ' },
            { path: '/contact', title: 'Contact' },
            { path: '/termsofuse', title: 'Terms of use' },
        ],
    }

    render() {
        const { links } = this.state;
        
        return (
            <nav styles={styles} className='header'>
                <Logo />
                <div className='navbar' >
                    <MainMenu links={links} />
                    <NavLink to='/cart'>
                        <i className="fas fa-shopping-basket"></i>
                    </NavLink>
                </div>
            </nav>
        );
    }
};

export default NavBar;