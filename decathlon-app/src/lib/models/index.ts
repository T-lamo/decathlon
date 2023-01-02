import type {
	ICartItem,
	IDiscount,
	IOrderDetail,
	IOrderItem,
	IPaymentDetail,
	IProduct,
	IProductCategory,
	IProductImage,
	IProductInventory,
	IProductRange,
	IShoppingSession,
	IStore,
	ITrackTime,
	IUser,
	IUserAdress,
	IUserPayment
} from '$lib/interfaces';
import type { ICoordinate } from '$lib/recommendation/interface';

export class discount implements IDiscount {
	id?: number;
	name?: string;
	desc?: string;
	percent = 0;
	active = false;
	productId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IDiscount>) {
		Object.assign(this, fields);
	}
}

export class cart_item implements ICartItem {
	id?: number;
	qty = 0;
	product_id = 0;
	createdAt?: string;
	updatedAt?: string;

	constructor(fields: Partial<ICartItem>) {
		Object.assign(this, fields);
	}
}
export class order_detail implements IOrderDetail {
	id?: number;
	total = 0;
	userId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderDetail>) {
		Object.assign(this, fields);
	}
}
export class order_item implements IOrderItem {
	id?: number;
	qty = 0;
	orderDetailId = 0;
	productId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class payment_detail implements IPaymentDetail {
	id?: number;
	amount = 0;
	provider = '';
	status = '';
	orderDetailId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class shopping_session implements IShoppingSession {
	id?: number;
	total = 0;
	userId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}

export class Product implements IProduct {
	id?: number;
	name = '';
	desc?: string;
	price = 10;
	productCategoryId = 0;
	in_sales = false;
	sales_qty =0;
	cover = "";
	qty = 1;
	coordinate?: ICoordinate;
	createdAt?: string;
	updatedAt?: string;

	constructor(fields: Partial<Product>) {
		Object.assign(this, fields);
	}

	get_product_price() : number {
		if(this.in_sales){
			return this.price - this.price*this.sales_qty/100;
		}
		return this.price;
	}
}
export class ProductCategory implements IProductCategory {
	id?: number;
	label = '';
	desc?: string;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IProductCategory>) {
		Object.assign(this, fields);
	}
}
export class product_image implements IProductImage {
	id?: number;
	cover?: string;
	productId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class product_inventory implements IProductInventory {
	id?: number;
	qty = 0;
	productId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class product_range implements IProductRange {
	id?: number;
	name = '';
	desc?: string;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}

export class store implements IStore {
	id?: number;
	adressLine = '';
	postalCode = '';
	latitude = 0;
	longitude = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}

export class track_time implements ITrackTime {
	id?: number;
	spentTime = '';
	userId = 0;
	productId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class user implements IUser {
	id?: number;
	username = '';
	firstname?: string;
	lastname?: string;
	telephone?: string;
	password?: string;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class user_adress implements IUserAdress {
	id?: number;
	adressLine1 = '';
	adressLine2?: string;
	city = '';
	country = '';
	postalCode = '';
	mobile?: string;
	userId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IOrderItem>) {
		Object.assign(this, fields);
	}
}
export class user_payment implements IUserPayment {
	id?: number;
	paymentType = '';
	provider = '';
	accountNo = '';
	userId = 0;
	createdAt?: string;
	updatedAt?: string;
	constructor(fields: Partial<IUserPayment>) {
		Object.assign(this, fields);
	}
}
