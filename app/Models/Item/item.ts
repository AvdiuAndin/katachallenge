import {constants} from "../../constans/constants";

export class Item {
    name: string;
    sellIn: number;
    quality: number;
    isForSale: boolean = true;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;

        const maxQuality = this.getMaximumMaxQuality();
        if(maxQuality < quality){
            throw new Error(`Quality cannot be bigger than ${maxQuality}`);
        }

        this.quality = quality;
    }

    updateStateOfItem() {
        this.decreaseSellIn();
        this.updateQuality();
    }

    updateQuality(){
        let subtract = 0;

        // Once the sell by date has passed, Quality degrades twice as fast 
        if(!this.stillDaysLeftToSell()){
            subtract = this.quality - constants.NORMAL_ITEM_DEGRADE_AMOUNT * 2;
        } else {
            subtract = this.quality - constants.NORMAL_ITEM_DEGRADE_AMOUNT;
        }

        //quality is set to 0 if the calculation result is less than 0 
        this.quality = (subtract) < constants.NORMAL_ITEM_MIN_QUALITY ? 0 : subtract;
    }

    decreaseSellIn() {
        this.sellIn--;
    }

    setQualityToMax(){
        this.quality = constants.NORMAL_ITEM_MAX_QUALITY;
    }

    calculateQualityPlus(number: number): number {
        return this.quality + number;
    }

    stillDaysLeftToSell(){
        return this.sellIn > 0;
    }

    forSale(){
        return this.isForSale;
    }

    isSellInDateWithinRange(min: number, max:number){
        return ( min <= this.sellIn ) && (this.sellIn <= max);
    }

    getMaximumMaxQuality(){
        return constants.NORMAL_ITEM_MAX_QUALITY;
    }

    checkIfNewValueExceedsMaximumQualityByAdding(number: number){
        let newValue = this.calculateQualityPlus(number);

        return constants.NORMAL_ITEM_MAX_QUALITY < newValue;
    }

    addToQuality(amount : number){
        let newValue = this.calculateQualityPlus(amount);
        if(this.checkIfNewValueExceedsMaximumQualityByAdding(amount)){
            this.setQualityToMax();
        } else {
            this.quality = newValue;
        }
    }
}
