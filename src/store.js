import {applyMiddleware, createStore } from 'redux';
import {promiseMiddleware} from './middleware';

const defaultState = {
    appName: 'Giteacher',
    menuOpen: false,
    articles: null,
    cat: null
};
const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles};
        case 'TOGGLE_MENU':
            return { ...state, menuOpen: !state.menuOpen};
        case 'GIVE_ME_A_CAT':
            return { ...state, cat: action.payload.url };
    }
    return state;
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;