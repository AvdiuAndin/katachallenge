
import { expect } from "chai";
import { AgedBrie } from "../../app/models/Item/aged-brie-item";

describe('AgedBrie item', function () {
    const item = new AgedBrie('AgedBrie', 12, 10);

    describe('updateQuality', function () {

        it('should update quality by one', function () {
            item.updateQuality();
            expect(item.quality).to.be.eq(11);
        })
    });

});