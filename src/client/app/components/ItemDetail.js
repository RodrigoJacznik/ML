import React from 'react';

const ItemDetail = (props) => {
    const condition = props.condition === 'used' ? 'usado' : 'Nuevo';
    const description = { __html: props.description };

    return (
        <div className="item-detail">
            <div className="item-detail__img-container">
                <img src={props.picture} alt="" />
            </div>
            <div className="item-detail__buy-info-container">
                <h4 className="item-detail__seller">{condition} - {props.sold_quantity} vendidos</h4>
                <h2 className="item-detail__name">{props.title}</h2>
                <h3 className="item-detail__price">
                    $ {props.price ? props.price.amount : ''}
                </h3>
                <button className="item-detail__buy">Comprar</button>
            </div>
            <div className="clear-fix"></div>
            <div className="item-detail__description-container">
                <p className="item-detail__description-title">Descripción</p>
                <div className="item-detail__description" dangerouslySetInnerHTML={description}></div>
            </div>
        </div>
    );
};

export default ItemDetail;
