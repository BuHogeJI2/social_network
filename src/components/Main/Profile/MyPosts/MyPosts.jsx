import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(p => <Post text={p.text} /> )

    let addNewPost = (values) => {
        props.addNewPost(values.newPostText);
    }

    return (
        <div className={css.my_posts}>
            <div className={css.add_post_block}>
                <h1>My Posts</h1>
                <AddNewPostFormRedux onSubmit={addNewPost} />
            </div>
            <div className={css.posts}>
                {postElements}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type={'text'} component={'textarea'} name={'newPostText'} placeholder="your news" className={css.textarea}/>
            <button className={css.btn}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

export default MyPosts
