import { Item } from "./Models/Item/Item";
import { AgedBrie } from "./Models/Item/aged-brie-item";
import { BackStageItem } from "./Models/Item/backstage-item";
import { SulfurasItem } from "./Models/Item/sulfuras-item";
import { ConjuredItem } from "./Models/Item/conjured-item";
import { CasualItem } from "./Models/Item/casual-item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = this.categorizeItems(items);
    }
    categorizeItems(items: Array<Item>){
        let arrayOfItems : Array<Item> = []
        for(let item of items){
            arrayOfItems.push(this.categorizeItemByName(item));
        }
        return arrayOfItems;
    }

    private categorizeItemByName(item: Item): Item {
        let name = item.name.toLocaleLowerCase();

        if(name.indexOf('aged brie') > -1){
            return new AgedBrie(item.name, item.sellIn, item.quality);
        }

        if(name.indexOf('backstage passes') > -1){
            return new BackStageItem(item.name, item.sellIn, item.quality);
        }

        if(name.indexOf('sulfuras') > -1){
            return new SulfurasItem(item.name, item.sellIn, item.quality);
        }

        if(name.indexOf('conjured') > -1) {
            return new ConjuredItem(item.name, item.sellIn, item.quality);
        }

        return new CasualItem(item.name, item.sellIn, item.quality);
        
    }

    updateQuality() {
        for(let item of this.items){
            this.decreaseSellIn(item);
            if (this.itemImplementsUpdateStateInterface(item)) {
                item.updateState();  // compiler knows it can update state now
             }
        }
        return this.items;
    }

    itemImplementsUpdateStateInterface(arg: any): arg is UpdateState {
        return (arg as UpdateState).updateState !== undefined;
    }
     
    printItems() {
        console.log("#id, name, sellIn, quality");
        this.items.forEach((element,i) => {
            console.log(i + ':' + element.name + ' ' + element.sellIn + ' ' + element.quality);
        });
        console.log();
    }

    decreaseSellIn(item:Item){
        item.sellIn--;
    }

}
