'use strict';

const ApiRouter = require('./ApiRouter');

const routerInit = router => {
	router.use('/api', ApiRouter.routes(), ApiRouter.allowedMethods());;
}

module.exports = routerInit;
