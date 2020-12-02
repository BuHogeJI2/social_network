import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/Forms/FormControls/FormControls";
import {maxLength, required} from "../../../../utils/validators/validators";

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

const maxLength10 = maxLength(10);

let AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field type={'text'} component={Textarea} name={'newPostText'}
                   validate={[required, maxLength10]} placeholder="your news"/>
            <button className={css.btn}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

export default MyPosts
