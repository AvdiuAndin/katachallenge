import { Item } from "./Models/Item/Item";

import {ProductCategorizer} from "./Controllers/ProductCategorizer";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = ProductCategorizer.categorizeProducts(items);
    }

    updateStateOfItems() {
        for(let item of this.items){
            item.updateStateOfItem();
        }
    }

}
