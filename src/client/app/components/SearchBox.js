import React from 'react';
import { Link } from 'react-router';

import LogoImg from '../../public/assets/Logo_ML.png';
import SearchIcon from '../../public/assets/ic_Search.png';

const SearchBox = ({ onSearch }) => {
    function onSubmit (e) {
        e.preventDefault();

        const value = e.target.querySelector('[name=search]').value;
        onSearch(value);
    }

    return (
        <div className="search-box">
            <div className="search-box__container">
                <Link to={'/'} className="search-box__logo-wrapper">
                    <img src={LogoImg} 
                         alt="Logo mercadolibre"
                         className="search-box__logo"/>
                </Link>
                <form onSubmit={onSubmit} className="search-box__input-wrapper">
                    <input name="search"
                           className="search-box__input"
                           type="text"
                           placeholder="Nunca dejes de buscar"/>

                    <button className="search-box__submit">
                        <img src={SearchIcon} alt="Icono de busqueda"/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBox;


