import React from 'react';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import ModalOrderSummary from '../ModalOrderSummary/ModalOrderSummary';

import { Table } from 'reactstrap';

const OrderSummary = (props) => {
    const { cart, request, price, discountStatus } = props;

    if(request.pending === false && request.success === true) {
        return (
            <div>
                <PageTitle>Order summary</PageTitle>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cart.map(item =>
                            <tr>
                                <td><img src={item.picture} alt='' /></td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>£{(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div>
                    {discountStatus ? <SectionTitle>Discount: 5%</SectionTitle> : ''}
                    <SmallTitle>Total price: £{price}</SmallTitle>
                </div>
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