export class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getJSON(path) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.baseUrl}${path}`);
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
    postJSON() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.baseUrl}/posts`);
        xhr.setRequestHeader('Content-Type', 'application/json')
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
            id: 0,
            content: 'New Post',
        }));
    }
}