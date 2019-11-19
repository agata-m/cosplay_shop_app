import { connect } from 'react-redux';
import { getSingleItem, loadSingleItemRequest, getRequest, getCart, calculatePrice, addToCart, addItemQuantity } from '../../../redux/redux';
import SingleItem from './SingleItem';

const mapStateToProps = state => ({
    items: getSingleItem(state),
    request: getRequest(state),
    cart: getCart(state),
})

const mapDispatchToProps = dispatch => ({
    loadSingleItem: (id) => dispatch(loadSingleItemRequest(id)),
    addToCart: (payload) => dispatch(addToCart(payload)),
    addItemQuantity: (id) => dispatch(addItemQuantity(id)),
    calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);