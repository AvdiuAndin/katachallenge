import { constants } from './../../Constants/constants';
import { Item } from "./item";

export class CasualItem extends Item implements UpdateState {

    constructor(
        name: string,
        sellIn: number,
        quality: number, public sellable: boolean){
            super(name,sellIn,quality);
        }

        updateState(){
        let substract;
        if(this.sellIn < 0){
            substract = this.quality - this.quality;
        } else {
            substract = this.quality - 1;
        }
        // quality is set to 0 if the calculation result is less than 0
        this.quality = (substract) < constants.NORMAL_ITEM_MIN_QUALITY ? 0 : substract;
        
    }

}