import React from 'react';

import ImgSrc from '../../public/assets/iphone.png';

const ItemDetail = () => {
    return (
        <div className="item-detail">
            <div className="item-detail__img-container">
                <img src={ImgSrc} alt="" />
            </div>
            <div className="item-detail__buy-info-container">
                <h4 className="item-detail__seller">Nuevo - 234 vendidos</h4>
                <h2 className="item-detail__name">Deco Reverse Sombrero Oxford</h2>
                <h3 className="item-detail__price">$ 1980</h3>
                <button className="item-detail__buy">Comprar</button>
            </div>
            <div className="clear-fix"></div>
            <div className="item-detail__description-container">
                <p className="item-detail__description-title">Descripción</p>
                <p className="item-detail__description">algo raro</p>
            </div>
        </div>
    );
};

export default ItemDetail;
