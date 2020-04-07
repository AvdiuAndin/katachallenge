import {constants} from "../../Constants/constants";

export class Item {
    name: string;
    sellIn: number;
    quality: number;
    isForSale: boolean = true;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateStateOfItem(){
        this.decreaseSellIn();
        this.updateQuality();
    }

    updateQuality(){
        let subtract = 0;
        if(this.stillDaysLeftToSell()){
            subtract = this.quality - this.quality;
        } else {
            subtract = this.quality - 1;
        }
        // quality is set to 0 if the calculation result is less than 0
        this.quality = (subtract) < constants.NORMAL_ITEM_MIN_QUALITY ? 0 : subtract;
    }

    decreaseSellIn(){
        this.sellIn--;
    }

    setQualityToMax(){
        this.quality = constants.NORMAL_ITEM_MAX_QUALITY;
    }

    calculateQualityPlus(number: number): number {
        return this.quality + number;
    }

    stillDaysLeftToSell(){
        return this.sellIn < 0;
    }

    buyable(){
        return this.isForSale;
    }

    isSellInDateWithinRange(min: number, max:number){
        return ( min <= this.sellIn ) && (this.sellIn <= max);
    }
}
