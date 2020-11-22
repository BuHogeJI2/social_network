import React from 'react';
import preloaderImg from '../../../assets/images/preloader.gif';
import css from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={css.preloader_block}>
            <img src={preloaderImg} alt=""/>
        </div>
    )
}

export default Preloader;