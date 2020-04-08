
import { expect } from "chai";
import { ItemService } from "../../app/services/item-service";
import { Item } from "../../app/models/Item/Item";
import { constants } from "../../app/constans/constants";

describe('Item', function () {
   const item = new Item('Random item', 5, 5);

   describe('on creation of item with name \'Random item\' with 5 sellIn days and number of quality 5', function () {

      it('item object should have keys: name, sellIn, quality', function () {
         expect(item).to.have.any.keys('name', 'sellIn', 'quality');
      });

      it('should have quality equal to 5', function () {
         expect(item.quality).to.be.eq(5);
      });
      it('should have sell in day equal to 5', function () {
         expect(item.sellIn).to.be.eq(5);
      });
   })

   describe('on creation with quality that exceeds the limit', function () {
      it("should throw error", function () {
         expect(() => { new Item("newItem", 0, 120) }).to.throw();
      })
   })

   describe('decreaseSellIn', function () {
      it('should decrease sellIn by one', function () {
         item.decreaseSellIn();
         expect(item.sellIn).to.be.eq(4);
      });
   })

   describe('updateQuality', function () {

      it('should decrease quality by one if sellIn day did not pass', function () {
         item.updateQuality();
         expect(item.quality).to.be.eq(4);
      });


      it('should decrease quality twice as fast if sellIn day has passed', function () {
         item.sellIn = 0;
         item.updateQuality();
         expect(item.quality).to.be.eq(2);
      });

      it('should not have negative quality', function () {
         item.quality = 0;
         item.updateQuality();
         expect(item.quality).to.be.eq(0);
      });

      it('should not have quality bigger than the limit', function () {
         item.quality = constants.NORMAL_ITEM_MAX_QUALITY;
         item.updateQuality();
         expect(item.quality).not.to.be.greaterThan(constants.NORMAL_ITEM_MAX_QUALITY);
      });
   });

});