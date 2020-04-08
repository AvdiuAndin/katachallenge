import { constants } from '../../constans/constants';
import { Item } from './item';

export class BackStageItem extends Item {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }

    /**
     * Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
     */
    updateQuality(){
        // Check if selling date has passed
        if(this.sellIn > 0){
            
            // Check if the selling day is within 5 days
            if(super.isSellInDateWithinRange(1,5)){
                //  Quality by 3 when there are 5 days
                super.addToQuality(3)
                return;
            }

            // check if the selling date is within 10 days
            if(10 >= this.sellIn){
                // Quality increases by 2 when there are 10 days
                super.addToQuality(2);
                return;
            }

            // otherwise increase by one
            if(this.quality < constants.NORMAL_ITEM_MAX_QUALITY){
                this.quality += 1;
            } 

        } else {
            // Quality drops to 0 after the concert
            this.quality = 0;
        }
    }


}
