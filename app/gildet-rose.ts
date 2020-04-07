import { Item } from "./Models/Item/Item";
<<<<<<< HEAD
import { AgedBrie } from "./Models/Item/aged-brie-item";
import { BackStageItem } from "./Models/Item/backstage-item";
import { SulfurasItem } from "./Models/Item/sulfuras-item";
import { ConjuredItem } from "./Models/Item/conjured-item";
=======

import {ProductCategorizer} from "./Controllers/ProductCategorizer";
>>>>>>> master

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = ProductCategorizer.categorizeProducts(items);
    }

<<<<<<< HEAD
    private categorizeItemByName(item: Item): Item {
        let name = item.name.toLocaleLowerCase();

        if(name.indexOf('aged brie') > -1){
            return new AgedBrie(item.name, item.sellIn, item.quality, true);
        }

        if(name.indexOf('backstage passes') > -1){
            return new BackStageItem(item.name, item.sellIn, item.quality, true);
        }

        if(name.indexOf('sulfuras') > -1){
            return new SulfurasItem(item.name, item.sellIn, item.quality, false);
        }

        if(name.indexOf('conjured') > -1) {
            return new ConjuredItem(item.name, item.sellIn, item.quality, true);
        }

        return new Item(item.name, item.sellIn, item.quality);
        
    }

    updateQuality() {
=======
    updateStateOfItems() {
>>>>>>> master
        for(let item of this.items){
            item.updateStateOfItem();
        }
    }

}
