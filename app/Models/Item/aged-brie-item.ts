import { Item } from "./item";
import { constants } from "../../Constants/constants";

export class AgedBrie extends Item implements UpdateState {
    constructor(
        name: string,
        sellIn: number,
        quality: number,public sellable: boolean){
            super(name,sellIn,quality);
        }
    
    updateState(){
        let addition = this.quality + 1;

        this.quality = (addition > constants.NORMAL_ITEM_MAX_QUALITY) ? constants.NORMAL_ITEM_MAX_QUALITY : addition;
    }
}