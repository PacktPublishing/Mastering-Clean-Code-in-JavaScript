import {Customer} from '../../models/customer';
import {CustomersService} from '../../services/customers-service'; 

export class CustomersComponent {
    constructor() {
        this.service = new CustomersService();
    }
}