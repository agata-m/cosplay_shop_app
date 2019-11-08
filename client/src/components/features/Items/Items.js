import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import ItemsList from '../ItemsList/ItemsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Items extends React.Component {
    componentDidMount() {
        const { loadItemsByPage, initialPage, itemsPerPage } = this.props;
        loadItemsByPage(initialPage, itemsPerPage);
    }

    loadItemsPage = (page) => {
        const { loadItemsByPage, itemsPerPage } = this.props;
        loadItemsByPage(page, itemsPerPage);
    }

    render() {
        const { items, request, pages, presentPage } = this.props;
        const { loadItemsPage } = this;
        let { pagination } = this.props;

        if(pagination === undefined) {
            pagination = true
        }

        if(request.pending === false && request.success === true && items.length > 0) {
            return (
                <div>
                    <ItemsList items={items} />
                    { pagination && <Pagination pages={pages} onPageChange={loadItemsPage} initialPage={presentPage} />}
                </div>
            )
        } else if(request.pending === true || request.success === null) {
            return <Spinner />
        } else if(request.pending === false && request.success === true && items.length === 0) {
            return <Alert variant='info' children=''>No posts</Alert>
        } else if(request.pending === false && request.error !== null) {
            return <Alert variant='error' children=''>{request.error}</Alert>
        };
    }
};

Items.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        })
    ),
    loadItemsByPage: PropTypes.func.isRequired,
};

Items.defaultProps = {
    initialPage: 1,
    itemsPerPage: 1,
    pagination: true,
};

export default withRouter(props => <Items {...props} />);