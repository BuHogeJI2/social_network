import profileReducer, {addNewPost, deletePost} from "../profile-reducer";


let state = {
    posts: [
        {text: 'Why your code is too bad?', id: 1},
        {text: 'You have to work harder', id: 2},
        {text: 'Dont be a lazy peace of shit', id: 3},
        {text: 'Go WORK!', id: 4},
    ],
    friends: [
        {id: 1, name: 'Alesya', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 2, name: 'Nikita', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 3, name: 'Vlad', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 4, name: 'Andrew', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 5, name: 'IT-Kamasutra', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
    ],
    textarea: {
        value: '',
    },
    profileData: null,
    status: '',
}

test('post count should be add on 1', () => {
    let newPostText = "Hello, I'm a new post!"
    let newState = profileReducer(state, addNewPost(newPostText));
    expect(newState.posts.length).toBe(5);
});

test('deleting post with ID', () => {
    let postId = 2;
    let newState = profileReducer(state, deletePost(postId));
    expect(newState.posts.length).toBe(3);
})
