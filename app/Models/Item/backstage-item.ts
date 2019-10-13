import { constants } from '../../Constants/constants';
import { Item } from './item';

export class BackStageItem extends Item {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }

    updateQuality(){
        // range between [10, 6]
        if(this.sellIn > 0){
            //range between [5,1]
            if(this.isSellInDateWithinRange(1,5)){
                let newValue = this.calculateQualityPlus(3);

                if(this.checkIfNewValueExceedsMaximumQualityByAdding(3)){
                    this.setQualityToMax();
                } else {
                    this.quality = newValue;
                }
                return;
            }
            if(10 >= this.sellIn){
                let newValue = this.calculateQualityPlus(2);
                if(this.checkIfNewValueExceedsMaximumQualityByAdding(2)){
                    this.setQualityToMax();
                } else {
                    this.quality = newValue;
                }
                return;
            }

            if(this.quality < constants.NORMAL_ITEM_MAX_QUALITY){
                this.quality += 1;
            }
        } else {
            this.quality = 0;
        }
    }

    private checkIfNewValueExceedsMaximumQualityByAdding(number: number){
        let newValue = this.calculateQualityPlus(number);

        return constants.NORMAL_ITEM_MAX_QUALITY < newValue;
    }
}
