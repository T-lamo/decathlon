export interface IMovie {
    _id: number;
    title: string;
    overview: string;
    actor: string;
    len?: number;
    date?: string;
    cover?: string;
}

export interface ICartItem{
    id?: number;
    qty: number;
    product_id: number
    createdAt?: string;
    updatedAt?: string; 
}

export interface IDiscount{
    id?: number;
    name?: string;
    desc?: string;
    percent: number;
    active: boolean;
    productId: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IOrderDetail{
    id?: number;
    total: number;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IOrderItem{
    id?: number;
    qty: number;
    orderDetailId: number;
    productId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IPaymentDetail{
    id?: number;
    amount: number;
    provider: string;
    status: string;
    orderDetailId: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IProduct{
    id?: number;
    name: string;
    desc?: string;
    price: number;
    productCategoryId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IProductCategory{
    id?: number;
    name: string;
    desc?: string;
    productRangeId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IProductImage{
    id?: number;
    cover?: string;
    productId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IProductInventory{
    id?: number;
    qty: number;
    productId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IProductRange{
    id?: number;
    name: string;
    desc?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface IShoppingSession{
    id?: number;
    total: number;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IStore{
    id?: number;
    adressLine: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ITrackTime{
    id?: number;
    spentTime: string;
    userId: number;
    productId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IUser{
    id?: number;
    username: string;
    firstname?: string;
    lastname?: string;
    telephone?: string;
    password?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface IUserAdress{
    id?: number;
    adressLine1: string;
    adressLine2?: string;
    city: string;
    country: string;
    postalCode: string;
    mobile?: string;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface IUserPayment{
    id?: number;
    paymentType?: string;
    provider?: string;
    accountNo?: string;
    userId: number
    createdAt?: string;
    updatedAt?: string;
}