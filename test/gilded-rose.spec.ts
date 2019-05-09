import { expect } from 'chai';
import { GildedRose } from '../app/gildet-rose';
import { Item } from '../app/Models/Item/Item';

describe('check if the item`s name is as the given input' , function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

});