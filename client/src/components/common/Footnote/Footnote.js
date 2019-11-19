import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';

import './Footnote.scss';

class Footnote extends React.Component {

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
            <div className='footnote'>
                <p>All rights reserved</p>
                <MainMenu links={links} />
            </div>
        )
    }
}

export default Footnote;