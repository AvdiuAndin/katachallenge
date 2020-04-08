import { Item } from "./models/Item/Item";
import { AgedBrie } from "./models/Item/aged-brie-item";
import { BackStageItem } from "./models/Item/backstage-item";
import { SulfurasItem } from "./models/Item/sulfuras-item";
import { ConjuredItem } from "./models/Item/conjured-item";
import { ItemService } from "./services/item-service";

export class GildedRose {
    items: Array<Item>;
    itemService: ItemService = new ItemService;

    constructor(items = [] as Array<Item>) {
        this.items = this.categorizeItems(items);
    }

    categorizeItems(items: Array<Item>){
        
        let arrayOfItems : Array<Item> = []

        for(let item of items){
            arrayOfItems.push(
                this.itemService.categorizeItemByName(item)
            );
        }

        return arrayOfItems;
    }

}
