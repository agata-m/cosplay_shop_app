import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const HtmlBox = ({ children, ...otherProps }) => (
    <p {...otherProps} className='html-box'>
        {ReactHtmlParser(children)}
    </p>
);

export default HtmlBox;