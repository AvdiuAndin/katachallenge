
import { expect } from "chai";
import { ConjuredItem } from "../../app/models/Item/conjured-item";
import { BackStageItem } from "../../app/models/Item/backstage-item";

describe('BackStage item', function () {
    const item = new BackStageItem('Backed staged item', 12, 10);

    describe('updateQuality', function () {

        it('should increase quality by one if the sellin date is bigger than 10', function () {
            item.updateQuality();
            expect(item.quality).to.be.eq(11);
        })

        it('should increase quality by 2 if selling date is less than 10', function () {
            item.sellIn = 10;
            item.updateQuality();
            expect(item.quality).to.be.eq(13);
        });

        it('should increase quality by 3 if selling date is less than 5', function () {
            item.sellIn = 5;
            item.updateQuality();
            expect(item.quality).to.be.eq(16);
        });

        it('should have quality set to 0 after the concert', function () {
            item.sellIn = 0;
            item.updateQuality();
            expect(item.quality).to.be.eq(0);
        });
    });
});