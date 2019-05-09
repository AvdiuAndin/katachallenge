import { Item } from "./Models/Item/Item";

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

    private categorizeItemByName(item: Item): Item{
        let name = item.name.toLocaleLowerCase();

        if(name.indexOf('aged brie') > -1){
            // new Aged  Brie item
        }

        if(name.indexOf('backstage passes') > -1){
            // new backstagge passes item
        }

        if(name.indexOf('sulfuras') > -1){
            // new backstagge pass item
        }

        if(name.indexOf('conjured') > -1) {
            // new cojured item
        }
    }

    updateQuality() {
        return this.items;
    }

}
