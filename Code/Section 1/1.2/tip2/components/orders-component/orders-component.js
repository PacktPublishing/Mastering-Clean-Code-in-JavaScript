import { Order } from '../../models/order';
import { Item } from '../../models/item';
import { Customer } from '../../models/customer';
import { OrdersService } from '../../services/order-service';
import { ItemsService } from '../../services/item-service';
import { CustomersService } from '../../services/customers-service';

export class OrdersComponent {
    constructor() {
        this.ordersService = new OrdersService();
        this.itemsService = new ItemsService();
        this.customersService = new CustomersService();
    }

    add(customerId, itemId) {
        this.customersService.get(customerId).then(customer => {
            this.itemsService.get(itemId).then(item => {
                this.ordersService.add(new Order(128, customer, item));
            });
        });      
    }
}