import React from 'react';
import img from '../../public/assets/iphone.png';

const Item = () => {
    return (
        <div className="item">
            <div className="item__img-container">
                <img src={img} alt="" className="item__img"/>
            </div>

            <div className="item__info">
                <h3 className="item__price">1800</h3>
                <h2 className="item__title">Apple Touch completo super genial con un monton de cosas</h2>
                <p className="item__location">Capital Federal</p>
            </div>
            <div className="clear-fix"></div>
            <hr className="item__separator"/>
        </div>
    );
};

export default Item;
