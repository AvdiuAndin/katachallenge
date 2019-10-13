import { expect } from 'chai';
import { Item } from '../app/Models/Item/Item';
import {SulfurasItem} from "../app/Models/Item/sulfuras-item";
import {ProductCategorizer} from "../app/Controllers/ProductCategorizer";
import {BackStageItem} from "../app/Models/Item/backstage-item";
import {AgedBrie} from "../app/Models/Item/aged-brie-item";
import {ConjuredItem} from "../app/Models/Item/conjured-item";
import {GildedRose} from "../app/gildet-rose";

describe('gilded rose' , function () {

    describe('item', function(){

       it('should have keys: name, sellIn, quality', function() {
           const item = new Item('Sulftras', 5,5);
           expect(item).to.have.any.keys('name', 'sellIn','quality');
       });

        it('should be casual type of item', function(){
            const casualItem = ProductCategorizer.categorizeItemByName(new Item('ca$$sual type of item', 0,0));

            expect(ProductCategorizer.isItemTypeGuard(casualItem)).eq(true);
        });

        it('should be sulfuras type of item', function(){
            const item = ProductCategorizer.categorizeItemByName(new Item('sulfuras item', 0,0));
            expect(item instanceof SulfurasItem).eq(true);
        });

        it('should be backstage passes type of item', function(){
            const item = ProductCategorizer.categorizeItemByName(new Item('backstage passes', 0,0));
            expect(item instanceof BackStageItem).eq(true);
        });

        it('should be age brie passes type of item', function(){
            const item = ProductCategorizer.categorizeItemByName(new Item('aged brie', 0,0));
            expect(item instanceof AgedBrie).eq(true);
        });

        it('should be conjured passes type of item', function(){
            const item = ProductCategorizer.categorizeItemByName(new Item('conjured item', 0,0));
            expect(item instanceof ConjuredItem).eq(true);
        });

    });

    describe('casual item', function(){

        it('should decrease in quality and decrease sellIn when state is updated', function(){
            const item = new Item('Casual Item', 5,5);

            item.updateStateOfItem();

            expect(item.sellIn).eq(4);
            expect(item.quality).eq(4);
        });

        it('should have quality set to 0, if the sellIn number is 0', function(){
            const item = new Item('Casual Item', 0,10);

            item.updateStateOfItem();

            expect(item.quality).eq(0);
        });

    });

    describe('sulfuras item', function(){
        it('should be increased by one when state is updated', function(){
            const item = new SulfurasItem('Sulfuras Item', 1,10);

            item.updateStateOfItem();

            expect(item.quality).eq(11);
        });

        it('should be increased by one but will not exceed quality of number 80 when state is updated', function(){
            const item = new SulfurasItem('Sulfuras Item', 1,80);

            item.updateStateOfItem();

            expect(item.quality).eq(80);
        });

        it('should not be sold', function(){
            const item = new SulfurasItem('Sulfuras Item', 1,80);
            expect(item.buyable()).eq(false);
        })
    });

    describe('conjured item', function(){
        it('should quality should be set to 0 if the sellIn Day has passed when the state is updated', function(){
            const item = new ConjuredItem("Conjured item", 0, 10);

            item.updateStateOfItem();

            expect(item.quality).eq(0);
        });
        it('quality should decrese by two when the sate is updated', function(){
            const item = new ConjuredItem("Conjured item", 1, 10);

            item.updateStateOfItem();

            expect(item.quality).eq(8);
        })
    });

    describe('back stage item', function(){
        it('quality should be increased, as days(sellIn decreases) go by', function(){
            const item = new BackStageItem("Backstage item", 20, 15);

            item.updateStateOfItem();

            expect({
                quality: item.quality, sellIn: item.sellIn
            }).to.eql({
                quality: 16, sellIn: 19
            });
        });

        it('quality should be increased by 2 if the sellIn date is between 5 and 10', function(){
            const item = new BackStageItem("Backstage item", 10, 15);

            item.updateStateOfItem();

            expect({quality: item.quality, sellIn: item.sellIn}).to.eql({quality: 17, sellIn: 9});
        });

        it('quality should be increased by 3 if the sellIn date is between 1 and 5', function(){
            const item = new BackStageItem("Backstage item", 5, 15);

            item.updateStateOfItem();

            expect({
                quality: item.quality, sellIn: item.sellIn
            }).to.eql({
                quality: 18, sellIn: 4
            });
        });

        it('quality should be set to 0 sellIn date has passed', function(){
            const item = new BackStageItem("Backstage item", 1, 15);

            item.updateStateOfItem();

            expect({
                quality: item.quality, sellIn: item.sellIn
            }).to.eql({
                quality: 0, sellIn: 0
            });
        });
    });

    describe("shop",function(){
        const gildedRose = new GildedRose([
            new Item('casual Item', 10,10),
            new Item('Sulfuras item', 10, 10),
            new Item('Conjured item', 10, 10),
            new Item('backstage passes', 15, 15),
            new Item('aged brie', 15, 15)
        ]);

        it('should check if items are initialized according to their name',function(){
            const items = gildedRose.items;
            expect({
                item: ProductCategorizer.isItemTypeGuard(items[0]),
                sulfurasItem: items[1] instanceof SulfurasItem,
                conjuredItem: items[2] instanceof ConjuredItem,
                backstageItem: items[3] instanceof BackStageItem,
                agedBrieItem: items[4] instanceof AgedBrie,
            }).to.eql({
                item: true, sulfurasItem: true, conjuredItem: true, backstageItem: true, agedBrieItem: true,
            });
        });

        it('should update state of items', function(){
           gildedRose.updateStateOfItems();

           const updatedItems = gildedRose.items;

           expect({
               item: { sellIn: updatedItems[0].sellIn, quality: updatedItems[0].quality },
               sulfurasItem: { sellIn: updatedItems[1].sellIn, quality: updatedItems[1].quality },
               conjuredItem: { sellIn: updatedItems[2].sellIn, quality: updatedItems[2].quality },
               backstageItem: { sellIn: updatedItems[3].sellIn, quality: updatedItems[3].quality },
               agedBrieItem: { sellIn: updatedItems[4].sellIn, quality: updatedItems[4].quality }
           }).to.eql({
               item: {
                   sellIn: 9, quality: 9
               },
               sulfurasItem: { sellIn:9, quality: 11 },
               conjuredItem:  { sellIn:9, quality:8 },
               backstageItem:  { sellIn:14, quality:16 },
               agedBrieItem:  { sellIn: 14, quality:16 },
           });
        });
    })
});
