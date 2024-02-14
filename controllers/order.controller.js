const orderService = require('../services/order.service');

class OrderController {
	constructor() {}

	async create(req, res, next) {
		try {
			const data = req.body;
			console.log(data);
			const url = await orderService.create(data);
			console.log(url);

			res.status(201).json({
				message: 'ORDER_CREATED',
				data: {
					url: url,
				},
			});
		} catch (error) {
			console.log(error);
			next(error);
		}
	}
}

module.exports = new OrderController();
