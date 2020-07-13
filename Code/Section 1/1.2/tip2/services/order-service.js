import { Order } from '../models/order';


export class OrdersService {
    constructor() {
        this.ORDERS_ENDPOINT = "mytestapi.com/v1/orders";
    }

    all() {
        return fetch(this.ORDERS_ENDPOINT)
    }

    add(order) {
        return fetch(this.ORDERS_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
    }
}