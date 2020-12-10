import React from 'react'
import css from './MyFriends.module.css'
import Friend from "./Friend/Friend";

const MyFriends = ({friends}) => {

    let friendElements = friends.map(f => <Friend name={f.name} img={f.img} id={f.id}/>)

    return (
        <div className={css.friends_block}>
            <h2>My Friends</h2>
            {friendElements}
        </div>
    )
}

export default MyFriends