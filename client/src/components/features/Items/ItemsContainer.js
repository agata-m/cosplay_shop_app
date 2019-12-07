import { connect } from 'react-redux';
import { getRequest, loadItemsByPageRequest, getPages, getItemsSort, getPresentPage } from '../../../redux/redux';
import Items from './Items';

const mapStateToProps = state => ({
    items: getItemsSort(state),
    request: getRequest(state),
    pages: getPages(state),
    presentPage: getPresentPage(state),
})

const mapDispatchToProps = dispatch => ({
    loadItemsByPage: (page, itemsPerPage) => dispatch(loadItemsByPageRequest(page, itemsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);