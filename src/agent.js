import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const request = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://arsich.ru/getCat';

const responseBody = res => res.body;

const requests = {
    get: url =>
        request.get(`${API_ROOT}${url}`).then(responseBody)
};

const Cats = {
    cat: () =>
        requests.get('/')
};

export default {
    Cats
};