import 'whatwg-fetch';

function search(term) {
    return fetch(
        `http://localhost:8080/api/v1/items?q=${term}`,
        { method: 'GET', credentials: 'same-origin' }
    );
}

function get(id) {
    return fetch(
        `http://localhost:8080/api/v1/items/${id}`,
        { method: 'GET', credentials: 'same-origin' }
    );
}

export default {
    search,
    get
};
