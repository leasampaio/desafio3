const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require ('./src/routes');
const server = new Koa();

server.use(bodyParser())
server.use(router.routes());



server.listen(8081, console.log("Rodando!"));