import React from 'react';

import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layouts/MainMenu/MainMenu';

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
            <nav styles={styles} className='navbar'>
                <Logo />
                <MainMenu links={links} />
            </nav>
        );
    }
};

export default NavBar;