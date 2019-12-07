import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

class Pagination extends React.Component {

    state = {
        presentPage: this.props.initialPage || 1,
    }

    changePage = (newPage) => {
        const { onPageChange } = this.props;
        this.setState({ presentPage: newPage });
        onPageChange(newPage);
    }

    previousPage = () => {
        if (this.state.presentPage > 1) {
            this.changePage(this.state.presentPage - 1);
        }
    }

    nextPage = () => {
        if (this.state.presentPage < this.props.pages) {
            this.changePage(this.state.presentPage + 1);
        }
    }


    render() {
        const { pages } = this.props;
        const { presentPage } = this.state;
        const { changePage } = this;

        return (
            <div className='pagination'>
                <ul className='pagination_list'>

                    {presentPage > 1 && (
                        <li
                            className={`pagination_list_item${(true) ? ' pagination_list_item--active' : ''}`}
                            onClick={this.previousPage}>
                            <i className="fas fa-chevron-left" />
                        </li>
                    )}

                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={++page}
                            onClick={() => { changePage(page) }}
                            className={`pagination_list_item${(page === presentPage) ? ' pagination_list_item--active' : ''}`}>
                            {page}
                        </li>
                    )}

                    {presentPage < pages && (
                        <li
                            className={`pagination_list_item${(true) ? ' pagination_list_item--active' : ''}`}
                            onClick={this.nextPage}>
                            <i className="fas fa-chevron-right" />
                        </li>
                    )}

                </ul>
            </div>
        );

    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;