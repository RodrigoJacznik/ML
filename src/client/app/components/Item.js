import React from 'react';
import { Link } from 'react-router';

const FREE_SHIPPING_IMG = require('../../public/assets/ic_shipping.png');

const Item = (props) => {
    const freeShipping = props.free_shipping ?
        <img src={FREE_SHIPPING_IMG} className="item__free-shipping" alt="Free shipping" /> :
        '';

    return (
        <div className="item">
            <div className="item__img-container">
                <img src={props.picture} alt="" className="item__img"/>
            </div>

            <div className="item__info">
                <h3 className="item__price">$ {props.price.amount}{ freeShipping }</h3>
                <h2 className="item__title"><Link to={`/items/${props.id}`}>{props.title}</Link></h2>

                <p className="item__location">{props.state}</p>
            </div>
            <div className="clear-fix"></div>
            <hr className="item__separator"/>
        </div>
    );
};

export default Item;
