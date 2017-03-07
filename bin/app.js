let Koa = require('koa');
let Router = require('koa-router');
let path = require('path');
let fs = require('fs');
const webpack = require('webpack');
const serve = require('koa-static');

const webpack_config = require('../webpack.config.js');

const compiler = webpack(webpack_config);
const app = new Koa();
const router = new Router();
const dist_path = path.join(__dirname, '..', 'dist');

router.get('/', function (ctx, next) {
  this.response.type = 'html';
  this.response.body = fs.createReadStream(
    path.resolve(dist_path, 'index.min.html'));
});
app.use(router.routes());

if (process.env.NODE_ENV !== 'production') {
  console.log(process.env.NODE_ENV);
  app.use(require('koa-webpack-dev-middleware')(compiler));
  app.use(require('koa-webpack-hot-middleware')(compiler));
}

app.use(serve(path.join(__dirname, '..', 'dist')));
module.exports = app;
