import { Item } from "./item";

export class SulfurasItem extends Item implements UpdateState {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }
    
    updateState(){
        (this.quality < 80) ? this.quality + 1: this.quality = 80;
    }
}