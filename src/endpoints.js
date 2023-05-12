module.exports = function (app) {
	app.get("/users/:id", (req, res) => {
		// #swagger.tags = ['User']
		// #swagger.description = 'Endpoint para obter um usuário.'

		const filtro = req.query.filtro;

		return res.status(404).send(false);
	});
};
