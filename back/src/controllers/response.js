const response = (ctx, code, dados) => { 
	const status =code >= 200 && 399 ? 'sucesso' : 'erro';
	ctx.status =code;
	ctx.body ={
		status,
		dados
	};
};

module.exports = response;