
import { expect } from "chai";
import { ItemService } from "../../app/services/item-service";
import { Item } from "../../app/models/Item/Item";
import { SulfurasItem } from "../../app/models/Item/sulfuras-item";

describe('Sulfras Item', function () {
    const item = new SulfurasItem('Sulfras Item');

    it('should not be available for sale', function () {
        expect(item.forSale()).to.be.false;
    })

    describe('on creation', function () {

        it('should have quality set to 80 by default', function () {
            expect(item.quality).to.be.eq(80);
        });

    });

    describe('updateQuality', function () {

        it('must not alter quality', function () {
            item.updateQuality();
            expect(item.quality).to.be.eq(80);
        });

    });

});