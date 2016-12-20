import React from 'react';
import SearchBox from './SearchBox';

const ItemList = ({ children }) => {
    return (
        <div>
            <SearchBox />
            <main>
                {children}
            </main>
        </div>
    );
};

export default ItemList;

