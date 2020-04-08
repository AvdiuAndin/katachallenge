
import { expect } from "chai";
import { ItemService } from "../../app/services/item-service";
import { Item } from "../../app/models/Item/Item";
import { SulfurasItem } from "../../app/models/Item/sulfuras-item";
import { BackStageItem } from "../../app/models/Item/backstage-item";
import { AgedBrie } from "../../app/models/Item/aged-brie-item";
import { ConjuredItem } from "../../app/models/Item/conjured-item";



describe('Item service', function(){
    const itemService = new ItemService();

    describe("categorizeItemByName", function(){

        it('should return object of type Item when Item with name \'ca$$sual type of item\' is sent as parameter', function(){
            const casualItem = itemService.categorizeItemByName(new Item('ca$$sual type of item', 0,0));
            expect(casualItem instanceof Item).to.be.true;
         });
    
         it('should return object of type Sulfuras when item with name \'sulfuras item\' is sent as parameter', function(){
            const sulfrasItem = itemService.categorizeItemByName(new Item('sulfuras item', 0,0));
            expect(sulfrasItem instanceof SulfurasItem).to.be.true;
         });
    
         it('should return object of type BackStageItem when item with name \'backstage passes\' is sent as parameter', function(){
            const backstagePass = itemService.categorizeItemByName(new Item('backstage passes', 0,0));
            expect(backstagePass instanceof BackStageItem).to.be.true;
         });
    
         it('should return object of type AgedBrie when item with name \'aged brie\' is sent as parameter', function(){
            const agedBrie = itemService.categorizeItemByName(new Item('aged brie', 0,0));
            expect(agedBrie instanceof AgedBrie).to.be.true;
         });
    
         it('should return object of type ConjuredItem when item with name \'conjured item\' is sent as parameter', function(){
            const conjuredItem = itemService.categorizeItemByName(new Item('conjured item', 0,0));
            expect(conjuredItem instanceof ConjuredItem).to.be.true;
         });
    })
 });