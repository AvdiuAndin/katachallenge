import { Item } from "./item";
import { constants } from "../../Constants/constants";

export class AgedBrie extends Item {
    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }

    updateQuality(){
        let addition = this.quality + 1;

        this.quality = (addition > constants.NORMAL_ITEM_MAX_QUALITY) ? constants.NORMAL_ITEM_MAX_QUALITY : addition;
    }
}
