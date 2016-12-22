import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from './Breadcrumb';
import ItemList from './ItemList';

const ItemListLayout = ({ filter, items}) => {
    return (
        <div>
            <Breadcrumb links={['Inicio', `"${filter}"`]} />
            <ItemList items={items} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.items,
    filter: state.filter
});

export default connect(mapStateToProps)(ItemListLayout);
