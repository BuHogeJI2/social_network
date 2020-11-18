import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.profile.posts.map(p => <Post text={p.text} /> )
    let textareaRef = React.createRef();

    let addNewPost = () => {
        props.dispatch({type: 'ADD-NEW-POST'})
    }

    let onTextareaChange = () => {
        props.dispatch({
            type: 'CHANGE-TEXTAREA',
            page: 'PROFILE',
            value: textareaRef.current.value,
        })
    }

    return (
        <div className={css.my_posts}>
            <div className={css.add_post_block}>
                <h1>My Posts</h1>
                <textarea onChange={onTextareaChange} ref={textareaRef} placeholder="your news" value={props.profile.textarea.value}/>
                <button onClick={addNewPost} className={css.btn}>Add post</button>
            </div>
            <div className={css.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts