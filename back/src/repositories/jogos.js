const bd = require('../utils/databese');

async function obterJogosDaRodada (rodada){
	const query = `SELECT * FROM  jogos WHERE rodada = $1`;
	const result = await bd.query ({
		text: query,
		values: [rodada]
	})

	return result.rows;
}
module.exports = {
	obterJogosDaRodada
}