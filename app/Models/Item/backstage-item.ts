import { constants } from '../../Constants/constants';
import { Item } from './item';

export class BackStageItem extends Item implements UpdateState {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }
    
    updateState(){
        // range between [10, 6]
        if(this.sellIn > 0){
            //range between [5,1]
            if(5 >= this.sellIn){
                let newValue = this.calculateQualityPlus(3);
    
                if(constants.NORMAL_ITEM_MAX_QUALITY < newValue){
                    this.setQualityToMax();
                } else {
                    this.quality = newValue;
                }
                return;
            }
            if(10 >= this.sellIn){
                let newValue = this.calculateQualityPlus(2);
    
                if(constants.NORMAL_ITEM_MAX_QUALITY < newValue){
                    this.setQualityToMax();
                } else {
                    this.quality = newValue;
                }
    
                return;
            }
            if(this.quality < constants.NORMAL_ITEM_MAX_QUALITY){
                this.increaseQualityByValue(1);
            }
        } else {
            this.quality = 0;
        }
        
    }

    private calculateQualityPlus(number: number): number {
        return this.quality + number;
    }

    private increaseQualityByValue(value: number){
        this.quality = this.quality + value;
    }

    private setQualityToMax(){
        this.quality = constants.NORMAL_ITEM_MAX_QUALITY;
    }
}