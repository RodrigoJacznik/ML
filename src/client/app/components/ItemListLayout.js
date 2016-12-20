import React from 'react';
import Breadcrumb from './Breadcrumb';
import ItemList from './ItemList';

const ItemListLayout = () => {
    return (
        <div>
            <Breadcrumb />
            <ItemList />
        </div>
    );
};

export default ItemListLayout;
