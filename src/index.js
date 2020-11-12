import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Alesya'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'IT-Kamasutra'},
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 1, message: 'When to the gym?'},
    {id: 1, message: 'Where is cities???'},
]

let posts = [
    {text: 'Why your code is too bad?', id: 1},
    {text: 'You have to work harder', id: 2},
    {text: 'Dont be a lazy peace of shit', id: 3},
    {text: 'Go WORK!', id: 4},
]

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
