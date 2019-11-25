import { Api} from '/lib.js';

const api = new Api('http://localhost:9999');
api.getJSON('/posts');