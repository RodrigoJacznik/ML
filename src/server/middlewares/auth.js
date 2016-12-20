const fetch = require('node-fetch');

const CLIENT_ID = '3596150875622743';
const SECRET_KEY = 'S4YG2IWhBEGtjFpH20DYGZjdKSwGU9KS'

/**
 * Convierte un objeto a un string con formato query
 *
 * ejemplo:
 *  objectToQuery({ uno: 1, dos: 2}) -> 'uno=1&dos=2'
 *
 * @param Object obj: objeto a convertir
 * @return String: string con formato query
 *
 */
function objectToQuery (obj) {
    return Object.keys(obj)
            .map((key) => `${key}=${obj[key]}`)
            .join('&');
}

/**
 * Middleware para que las conexiones a la api
 * tengan una token de autorización
 *
 */
module.exports = (req, res, next) => {

    // No es necesario pedir un nuevo token
    if (req.session && req.session.token) {
        return next();
    }

    // Ya pedimos un codigo para solicitar el token
    if (req.query.code) {
        const search = { q: req.query.q };

        const params = {
            'grant_type': 'authorization_code',
            'client_id': CLIENT_ID,
            'client_secret': SECRET_KEY,
            'code': req.query.code,
            'redirect_uri': 'http://localhost:8080'
        };

        const query = objectToQuery(params);

        fetch(`https://api.mercadolibre.com/oauth/token?${query}`, { method: 'POST' })
            .then((resp) => resp.json())
            .then((data) => { req.session.token = data; })
            .then(() => {
                let url = `http://localhost:8080${req.session.originalUrl}`;
                res.redirect(url);
            });
    } else {
        // Obtenemos un codigo para luego solicitar el token
        req.session.originalUrl = req.originalUrl;

        const params = {
            'response_type': 'code',
            'client_id': CLIENT_ID,
            'redirect_uri': `http://localhost:8080`
        };

        const query = objectToQuery(params);

        res.redirect(`https://auth.mercadolibre.com.ar/authorization?${query}`);
    }
}
