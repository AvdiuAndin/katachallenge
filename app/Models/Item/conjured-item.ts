import { Item } from "./item";

export class ConjuredItem extends Item{

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }

    updateQuality(){
        this.quality = this.sellIn < 0 ? 0 : this.quality - 2;
        
    }
}
