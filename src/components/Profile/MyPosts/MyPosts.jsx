import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post text={p.text} /> )

    return (
        <div className={css.my_posts}>
            <div className={css.my_posts_header}>
                <h1>My Posts</h1>
                <textarea placeholder="your news"></textarea>
                <button className={css.btn}>Send</button>
            </div>
            <div className={css.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts