const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const server = new Koa();

server.use(bodyParser())
server.use(async ctx =>{
    ctx.body = "Hello World";
});

server.listen(8081, console.log("Rodando!"));