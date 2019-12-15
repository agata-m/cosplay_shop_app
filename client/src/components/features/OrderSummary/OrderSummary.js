import React from 'react';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

import SectionTitle from '../../common/SectionTitle/SectionTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import ModalOrderSummary from '../ModalOrderSummary/ModalOrderSummary';

import { Table } from 'reactstrap';
import uuid from 'uuid';

import './OrderSummary.scss';

const OrderSummary = (props) => {
    const { cart, request, price } = props;

    if(request.pending === false && request.success === true) {
        return (
            <div className='order-summary'>
                <PageTitle className='order-title'>Order summary</PageTitle>
                <Table striped className='order-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cart.map(item =>
                            <tr key={uuid()}>
                                <td className='name-col'>{item.name}</td>
                                <td className='quantity-col'>{item.quantity}</td>
                                <td className='price-col'>£{(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <SectionTitle>Total price: £{price.toFixed(2)}</SectionTitle>
                <ModalOrderSummary />
            </div>
        )
    } else if(request.pending === true || request.success === false) {
        return <Spinner />
    } else if(cart.length === 0) {
        return <Alert variant='info'>Your cart is empty!</Alert>
    } else {
        return <Alert variant='error'>Ups! Something went wrong. Please try again</Alert>
    }
}

export default OrderSummary;