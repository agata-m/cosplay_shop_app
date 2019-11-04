import React from 'react';
import PropTypes from 'prop-types';
import onPageChange from '../../../redux/postsRedux';

import './Pagination.scss';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

class Pagination extends React.Component {
    state = {
        presetPage: this.props.initialPage || 1
    }

    changePage = (newPage) => {
        this.setState({ presentPage: newPage });
        onPageChange(newPage);
    }

    goToPage = newPageNumber => {
        const { presentPage } = this.state;
        const { changePage } = this;
        const { targetPage } = presentPage + newPageNumber;
        changePage(targetPage);
    }

    render() {
        const { pages } = this.props;
        const { presentPage } = this.state;
        const { changePage, goToPage } = this;

        return (
            <div className='pagination'>
                <ul className='pagination_list'>

                    { presentPage >= 2 && (
                        <li className='pagination_list_item'>
                            <i class="fas fa-chevron-left" onClick={() => {goToPage(-1)}}></i>
                        </li>
                    )}

                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={++page}
                            onClick={() => { changePage(page) }}
                            className={`pagination_list_item${((page) === presentPage) ? ' pagination_list_item--active' : ''}`}>
                            {page}
                        </li>
                    )}

                    { presentPage !== pages && (
                        <li className='pagination_list_item'>
                            <i class="fas fa-chevron-right" onClick={() => {goToPage(1)}}></i>
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