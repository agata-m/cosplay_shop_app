import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortItems, getItemsSort } from '../../../redux/redux';
import SortingItems from './SortingItems';

const SortingItemsContainer = ({ sortItems }) => {
    return <SortingItems sortItems={sortItems} />
};

SortingItemsContainer.propTypes = {
    sortItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: getItemsSort(state),
});

const mapDispatchToProps = dispatch => ({
    sortItems: (sort) => dispatch(sortItems(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingItemsContainer);