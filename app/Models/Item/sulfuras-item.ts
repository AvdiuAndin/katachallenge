import { Item } from "./item";
import {constants as CONSTANTS} from "../../Constants/constants";

export class SulfurasItem extends Item {

    constructor(
        name: string,
        sellIn: number,
        quality: number, isForSale: boolean = false){
            super(name,sellIn,quality);
            this.isForSale = isForSale;
        }

    updateQuality(){
        if( this.quality < CONSTANTS.SULFURAS_MAX_QUALITY) { this.quality++ } else { this.quality = 80 }
    }
}
