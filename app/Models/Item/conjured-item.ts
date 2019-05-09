import { Item } from "./item";

export class ConjuredItem extends Item implements UpdateState {

    constructor(
        name: string,
        sellIn: number,
        quality: number, public sellable:boolean){
            super(name,sellIn,quality);
        }

    updateState(){
        let substract;
        if(this.sellIn < 0){
            substract = this.quality - this.quality;
        } else {
            substract = this.quality - 2;
        }
        this.quality = (substract) < 0 ? 0 : substract;
        
    }
}