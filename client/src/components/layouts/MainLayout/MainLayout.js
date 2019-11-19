import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBar';
import Footnote from '../../common/Footnote/Footnote';

import './MainLayout.scss';

const MainLayout = ({ children }) => (
    <div>
        <PageContainer>
            <NavBar />
            <div className='main'>{children}</div>
            <Footnote />
        </PageContainer>
    </div>
);

export default MainLayout;