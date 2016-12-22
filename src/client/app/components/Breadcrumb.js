import React from 'react';

const Breadcrumb = ({ links=[]}) => {
    const items = links.map((item, key) => (
        <li className="breadcrumb__item" key={key}>{item}</li>
    ));

    return (
        <div className="breadcrumb-container">
            <ul className="breadcrumb">
                {items}
            </ul>
        </div>
    );
};

export default Breadcrumb;
