import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from './redux/store';

import './styles/global.scss';
import 'animate.css/animate.min.css';

const Root = () => (
    <Router>
        <App />
    </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));
