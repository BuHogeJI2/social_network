import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {text: 'Why your code is too bad?', id: 1},
        {text: 'You have to work harder', id: 2},
        {text: 'Dont be a lazy peace of shit', id: 3},
        {text: 'Go WORK!', id: 4},
    ]

    let postElements = posts.map(p => <Post text={p.text} /> )

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