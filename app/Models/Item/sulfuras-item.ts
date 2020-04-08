import { Item } from "./item";
import {constants as CONSTANTS} from "../../constans/constants";

export class SulfurasItem extends Item {

    // Sulfuras item cannot have have a sell in date since it cannot be sold
    constructor(
        name: string){
            super(name, 0 , CONSTANTS.SULFRAS_QUALITY);
            this.isForSale = false;
    }

    /**
     * Overriden methods from Item class
     * These methods are empty because 
     * "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
     * "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters
     */
    updateQuality(){}
    decreaseSellIn(){}

    getMaximumMaxQuality(){
        return CONSTANTS.SULFRAS_QUALITY;
    }
}
