const fetch = require('node-fetch');

const API = 'https://api.mercadolibre.com';

/**
 * Parsea un item a la salida esperada
 */
function parseItem(item) {
    let amount, decimals;
    [amount, decimals] = item.price.toString()
        .split('.').map((n) => parseInt(n));

    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount,
            decimals,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
    }
}

/**
 * Parsea un usuario a la salida esperada
 */
function parseAuthor(author) {
    return {
        name: author.first_name,
        lastname: author.last_name
    };
}

/**
 * Obtiene el item con id `id`
 *
 * @param id: id del item que se quiere obtener
 * @return {} | undefined: el item buscado
 **/
function get(id, token) {
    return Promise.all([
        fetch(`${API}/users/me?access_token=${token}`),
        fetch(`${API}/items/${id}?access_token=${token}`)
    ]).then((values) => {
        return Promise.all(values.map((result) => result.json()));
    }).then(([author, item]) => {
        const partialItem = parseItem(item)
        partialItem.description = item.description;
        partialItem.picture = item.pictures[0].url;
        partialItem.sold_quantity = item.sold_quantity;

        return fetch(`${API}/categories/${item.category_id}`)
            .then((resp) => resp.json())
            .then((categories) => ({
                author: parseAuthor(author),
                item: partialItem,
                categrories: categories.path_from_root.map((category) => category.name)
            }))
    });
}

/**
 * Realiza una busqueda fuzzy en la lista de items con `term`
 *
 * @param term: termino de busqueda
 * @return []: lista de items que cumplen con `term`
 **/
function fuzzy(term, token, limit=5) {
    return Promise.all([
        fetch(`${API}/users/me?access_token=${token}`),
        fetch(`${API}/sites/MLA/search?q=${term}&limit=${limit}&access_token=${token}`)
    ]).then((values) => {
        return Promise.all(values.map((result) => result.json()));
    }).then(([ author, items ]) => ({
        author: parseAuthor(author),
        items: items.results.map(parseItem)
    }));
}

module.exports = {
    get,
    fuzzy
}
