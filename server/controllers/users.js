/* B"H

*/

const express = require('express');
const users = require('../models/users');

const router = express.Router();

router.get('/', (req, res) => {
        users.getAll().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res) => {
        users.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res) => {
        users.add(req.query.name, req.query.age ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .get('/rand', (req, res, next) => {
        const someVal = users.rand();
        res.send({someVal});
    })

module.exports = router;