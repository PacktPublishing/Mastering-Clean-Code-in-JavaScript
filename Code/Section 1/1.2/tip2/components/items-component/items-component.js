import { Item } from '../../models/item';
import { ItemsService } from '../../services/item-service';

export class ItemsComponent {
    constructor() {
        this.service = new ItemsService();
    }
}