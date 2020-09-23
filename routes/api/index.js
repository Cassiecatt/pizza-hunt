const router = require('express');
const pizzaRoutes = reqyure('./pizza-routes.js');

//add prefix of '/pizzas' to routes created in 'pizza-routes.js'
router.request('/pizzas', pizzaRoutes);

module.exports = router;