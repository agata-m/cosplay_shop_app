import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Col, Card, Badge, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './ItemSummary.scss';

const ItemSummary = ({ id, name, price, tag, picture }) => (
    
    <Col className="item-summary">
        <NavLink to={`/items/${id}`} >
            <Card className="item-summary-card">
                <Badge color="secondary">{tag}</Badge>
                <CardImg src={`${picture}`} alt=''/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>£{price}</CardSubtitle>
                </CardBody>
            </Card>
        </NavLink>
    </Col>
    

);

ItemSummary.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    deal: PropTypes.string,
    picture: PropTypes.string,
    quantity: PropTypes.number,
};

export default ItemSummary;