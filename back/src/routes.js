const Router = require ('koa-router');
const router = new Router();

const Jogos = require ('./controllers/jogos');

router.get('/jogos/:rodada', Jogos.obterJogosDeUmaRodada);



module.exports = router;