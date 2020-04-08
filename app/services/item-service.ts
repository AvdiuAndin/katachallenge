import { Item } from "../models/Item/Item";
import { AgedBrie } from "../models/Item/aged-brie-item";
import { BackStageItem } from "../models/Item/backstage-item";
import { SulfurasItem } from "../models/Item/sulfuras-item";
import { ConjuredItem } from "../models/Item/conjured-item";

export class ItemService {
    
    /**
     * Check the name of the item and based on the item's name return a object which is created from the class the item belongs to
     */
    categorizeItemByName(item: Item): Item {
        let name = item.name.toLocaleLowerCase();

        if(name.indexOf('aged brie') > -1){
            return new AgedBrie(item.name, item.sellIn, item.quality);
        }

        if(name.indexOf('backstage passes') > -1){
            return new BackStageItem(item.name, item.sellIn, item.quality);
        }

        if(name.indexOf('sulfuras') > -1){
            return new SulfurasItem(item.name);
        }

        if(name.indexOf('conjured') > -1) {
            return new ConjuredItem(item.name, item.sellIn, item.quality);
        }

        return new Item(item.name, item.sellIn, item.quality);
        
    }
}