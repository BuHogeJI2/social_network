import React from 'react'
import css from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={css.friend_block}>
            <img src={props.img} alt=""/>
            <div>{props.name}</div>
        </div>
    )
}

export default Friend