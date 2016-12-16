import React from 'react';

import LogoImg from '../../public/assets/Logo_ML.png';
import SearchIcon from '../../public/assets/ic_Search.png';

const SearchBox = () => {
    return (
        <div className="search-box">
            <div className="search-box__container">
                <div className="search-box__logo-wrapper">
                    <img src={LogoImg} alt="Logo mercadolibre" className="search-box__logo"/>
                </div>
                <div className="search-box__input-wrapper">
                    <input className="search-box__input" type="text" placeholder="Nunca dejes de buscar"/>
                    <button className="search-box__submit">
                        <img src={SearchIcon} alt="Icono de busqueda"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;


