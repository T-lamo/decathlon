import { film } from '../../../lib/server/film.query';
import { json } from '@sveltejs/kit';
import sequelize from '$lib/server/orm';
import {
	cart_item,
	discount,
	order_detail,
	order_item,
	payment_detail,
	product,
	product_category,
	product_image,
	product_inventory,
	product_range,
	shopping_session,
	store,
	track_time,
	user,
	user_adress,
	user_payment
} from '$lib/schema/index';
import { Op } from 'sequelize';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		// await product_range.sync({ force: true });
		// await product_category.sync({ force: true });
		// await cart_item.sync({ force: true });
		// await product.sync({ force: true });
		// await product_inventory.sync({ force: true });
		// await discount.sync({ force: true });
		// await product_image.sync({ force: true });
		// await user.sync({ force: true });
		// await shopping_session.sync({ force: true });
		// await order_detail.sync({ force: true });
		// await order_item.sync({ force: true });
		// await payment_detail.sync({ force: true });
		// await user_adress.sync({ force: true });
		// await user_payment.sync({ force: true });
		// await track_time.sync({ force: true });
		// await store.sync({ force: true });
		sequelize.sync({ force: true });

		const res = await product_range.findAll({
			include: product_category
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
	// const res = await film.select();
	const res = await product_category.findAll({
		include: product_range
	});

	return json(res);
}
