const xhr = new XMLHttpRequest();
xhr.open('GET' , 'http://localhost:9999/posts');
xhr.addEventListener('load' , ev => {
if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
}
});

xhr.addEventListener('error' , ev => {
console.log(xhr);
});
xhr.send();