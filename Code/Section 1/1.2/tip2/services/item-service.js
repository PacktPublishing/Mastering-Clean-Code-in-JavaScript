import { Item } from '../models/item';

export class ItemsService {
    constructor() {
        this.ITEMS_ENDPOINT = "mytestapi.com/v1/items";
    }

    getAll() {
        return fetch(this.ITEMS_ENDPOINT).then(items => items.json());
    }

    get(id) {
        return fetch(`${this.ITEMS_ENDPOINT}/${id}`).then(item => item.json());
    }

    add(item) {
        if(this.validateItem(item)) {
            return fetch(this.ITEMS_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(item),
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                }
            });
        }
        else {
            return new Error("Invalid item");
        }
    }

    addMultiple(items) {
        for(let item of items) {
            add(item);
        }
    }

    delete(id) {
        return fetch(`${this.ITEMS_ENDPOINT}/${id}`, {
            method: 'DELETE'
        });
    }

    validateItem(item) {
        return this.validateName(item.name)
                && this.validateCategory(item.category)
                && this.validatePrice(item.price);
    }

    validateName(name) {
        //code for name validation
    }

    validateCategory(category) {
        //code for category validation
    }

    validatePrice(price) {
        //core for price validation
    }
}