import { Api } from '/lib.js';

const api = new Api('http://localhost:9999');
api.getJSON('/posts', data => {
    console.log(data)
}, error => {
    console.log(error);
});

api.postJSON('/posts', { id: 0, content: 'Post' }, data => {
    console.log(data)
}, error => {
    console.log(error);
});