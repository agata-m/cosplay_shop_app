import { connect } from 'react-redux';
import { getTotalPrice, getCart, getDiscountStatus, getRequest } from '../../../redux/redux';

import OrderSummary from './OrderSummary';

const mapStateToProps = state => ({
    request: getRequest(state),
    price: getTotalPrice(state),
    cart: getCart(state),
    discountStatus: getDiscountStatus(state)
});

export default connect(mapStateToProps, null)(OrderSummary);