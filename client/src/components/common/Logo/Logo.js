import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
	<NavLink to='/'>
		<h1 className="logo">CosCrafts</h1>
	</NavLink>
	
);

export default Logo;
