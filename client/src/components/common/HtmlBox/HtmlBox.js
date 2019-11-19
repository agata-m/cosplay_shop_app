import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const HtmlBox = ({ children, ...otherProps }) => (
    <p {...otherProps} className='html-box'>
        {ReactHtmlParser(children)}
    </p>
);

export default HtmlBox;