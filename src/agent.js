import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const request = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://api.thecatapi.com/v1/images/search?format=json';

const responseBody = (res) => {
    return res.body[0];
};

const headers = req => {
    req.set('Content-Type', 'application/json');
    req.set('x-api-key', 'a2db7062-ae27-49d2-aa9c-9aa101c66b6d');
};

const requests = {
    get: url =>
        request.get(`${API_ROOT}${url}`).use(headers).then(responseBody)
};

const Cats = {
    cat: () =>
        requests.get('/')
};

export default {
    Cats
};