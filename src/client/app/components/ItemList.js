import React from 'react';

import Item from './Item.js';

const ItemList = ({ items }) => {
    const itemDom = items.map((item) => <Item {...item} key={item.id} />);

    return (
        <div className="item-list">
            {itemDom}
        </div>
    );
};

export default ItemList;
