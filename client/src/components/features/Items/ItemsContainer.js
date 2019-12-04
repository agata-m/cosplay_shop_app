import { connect } from 'react-redux';
import { getRequest, loadItemsByPageRequest, getPages, getItemsSort } from '../../../redux/redux';
import Items from './Items';

const mapStateToProps = state => ({
    items: getItemsSort(state),
    request: getRequest(state),
    pages: getPages(state),
})

const mapDispatchToProps = dispatch => ({
    loadItemsByPage: (page) => dispatch(loadItemsByPageRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);