const response = require('./response');
const JogosDB = require('../repositories/jogos');
async function obterJogosDeUmaRodada (ctx){
	const {rodada = null} = ctx.params;

	if(rodada !== null){
		const result = await JogosDB.obterJogosDaRodada(rodada);

		if(result){
			return(ctx, 200, result);
		}

		return response(ctx,400, {mensagem: 'A rodada deve ser um númer entre 1 e 38'});

	}
	else{
		return response (ctx, 400, {mensagem: 'Mal formatada'});
	}
}

module.exports = { 
	obterJogosDeUmaRodada
}