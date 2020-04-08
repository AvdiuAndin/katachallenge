import { Item } from "./item";
import { constants } from "../../constans/constants";

export class AgedBrie extends Item {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
    }

    /**
     * "Aged Brie" actually increases in Quality the older it gets
     */
    updateQuality(){
        super.addToQuality(1);
    }
}
