const express = require('express')
const routes = express.Router()

routes.get('/', (req, res, next) => {
   res.send('Voce chegou, parabens')
})


module.exports = routes