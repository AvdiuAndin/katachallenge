
import { expect } from "chai";
import { ItemService } from "../../app/services/item-service";
import { Item } from "../../app/models/Item/Item";
import { constants } from "../../app/constans/constants";
import { ConjuredItem } from "../../app/models/Item/conjured-item";

describe('ConjuredItem', function(){
    const item = new ConjuredItem('Conjured item', 5, 5);

    describe('updateQuality',function(){

      it('should decrease quality by twice as fast as normal items do', function(){
         item.updateQuality();
         expect(item.quality).to.be.eq(3);
      });

      it('should decrease quality twice as fast if sellIn day has passed', function(){
         item.sellIn = 0;
         item.quality = 4;
         item.updateQuality();
         expect(item.quality).to.be.eq(0);
      });

      it('should not have negative quality', function(){
        item.quality = 1;
        item.updateQuality();
        expect(item.quality).to.be.eq(0);
     });
   });

 });