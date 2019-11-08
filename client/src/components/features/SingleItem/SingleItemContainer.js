import { connect } from 'react-redux';
import { getSingleItem, loadItemsRequest, getRequest, resetRequest } from '../../../redux/redux';
import SingleItem from './SingleItem';

const mapStateToProps = state => ({
    items: getSingleItem(state),
    request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
    resetRequest: () => dispatch(resetRequest()),
    loadSingleItem: (id) => dispatch(loadItemsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);