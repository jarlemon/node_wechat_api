var Router = require('koa-router');
var router = new Router();

router.get('/v1/classic/my', (ctx, next) => {
  ctx.body = {
    key: 'classic'
  };
});

module.exports = router;
