import { Api} from '/lib.js';

const api = new Api('http://localhost:9999/posts');
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9999/posts');
    xhr.addEventListener('load', ev => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            return;
        }

        console.log(xhr.statusText);

    });

    xhr.addEventListener('error', ev => {
        console.log('Unexpected error');
    });
    xhr.send();
}

{
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9999/posts');
    xhr.setRequestHeader('Content-Type' , 'application/json')
    xhr.addEventListener('load', ev => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            return;
        }

        console.log(xhr.statusText);

    });

    xhr.addEventListener('error', ev => {
        console.log('Unexpected error');
    });
    xhr.send(JSON.stringify({
        id:0,
        content: 'New Post',
    }));
}