import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={css.my_posts}>
            <div className={css.my_posts_header}>
                <h1>My Posts</h1>
                <textarea placeholder="your news"></textarea>
                <button className={css.btn}>Send</button>
            </div>
            <div className={css.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts