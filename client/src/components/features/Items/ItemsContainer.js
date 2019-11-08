import { connect } from 'react-redux';
import { getItems, getRequest, loadItemsByPageRequest, getPages } from '../../../redux/redux';
import Items from './Items';

const mapStateToProps = state => ({
    items: getItems(state),
    request: getRequest(state),
    pages: getPages(state),
})

const mapDispatchToProps = dispatch => ({
    loadItemsByPage: (page) => dispatch(loadItemsByPageRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);