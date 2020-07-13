import { Customer } from '../models/customer';


export class CustomersService {
    constructor() {
        this.CUSTOMERS_ENDPOINT = "mytestapi.com/v1/customers"
    }

    getAll() {
        return fetch(this.CUSTOMERS_ENDPOINT).then(data => data.json());
    }

    get(id) {
        return fetch(`${this.CUSTOMERS_ENDPOINT}/${id}`).then(data => data.json());
    }

    add(newCustomer) {
        if(this.validateCustomer(newCustomer)) {
            return fetch(this.CUSTOMERS_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(newCustomer),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        else {
            throw new Error("Invalid User");
        }
    }

    addMultiple(customers) {
        for(let customer of customers) {
            this.add(customer);
        }
    }

    remove(id) {
        return fetch(`${this.CUSTOMERS_ENDPOINT}/${id}`, {
            method: 'DELETE'
        });
    }
    
    validateCustomer(customer) {
        return this.validateFirstName(customer.firstName)
                && this.validateLastName(customer.lastName)
                && this.validateEmail(customer.email)
                && this.validatePhone(customer.phone);
    }

    validateFirstName(firstName) {
        //code for first name validation
    }

    validateLastName(lastName) {
        //code for last name validation
    }

    validateEmail(email) {
        //code for email validation
    }

    validatePhone(phone) {
        //code for phone validation
    }
}