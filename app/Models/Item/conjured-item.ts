import { Item } from "./item";
import { constants } from "../../constans/constants";

export class ConjuredItem extends Item{

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }

    // "Conjured" items degrade in Quality twice as fast as normal items
    updateQuality(){
        let addition = 0;
        if(this.sellIn > 0){
            addition = this.quality - constants.NORMAL_ITEM_DEGRADE_AMOUNT * 2;
        } else {
            addition = this.quality - ((constants.NORMAL_ITEM_DEGRADE_AMOUNT * 2) * 2);
        }
        this.quality = addition < 0 ? 0 : addition;
    }
}
