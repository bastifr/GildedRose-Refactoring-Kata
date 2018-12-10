import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('updateQuality always keeps the name', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 0;
        const quality = 0;
        const items = [
            new Item('standardItem', sellIn, quality) ];
        const gildedRose = new GildedRose( items );

        //Acting block (execute)
        //const items = gildedRose.updateQuality();
        gildedRose.updateQuality();

        //Assert block (verify)
        expect(items[0].name).to.equal('standardItem');
    });

    it('updateQuality always decrese sellIn by one', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 10;
        const quality = 0;
        const gildedRose = new GildedRose([ new Item('standardItem', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetSellIn = 9;
        expect(items[0].sellIn).to.equal(expectetSellIn);
    });

    it('updateQuality always decrese quality by one', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 5;
        const quality = 10;
        const gildedRose = new GildedRose([ new Item('standardItem', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 9;
        checkQuality(items[0], expectetQuality);
    });
    
    it('updateQuality sellIn smaller zero decrese quality by two', function() {
        
        //Arrange block  (SetUp)
        const sellIn = -1;
        const quality = 10;
        const gildedRose = new GildedRose([ new Item('standardItem', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 8;
        checkQuality(items[0], expectetQuality);
    });
    
    it('updateQuality does not set quality smaller then zero', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 10;
        const quality = 0;
        const gildedRose = new GildedRose([ new Item('standardItem', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 0;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when sellin is negative does not set negative quality', function() {
        
        //Arrange block  (SetUp)
        const sellIn = -1;
        const quality = 1;
        const gildedRose = new GildedRose([ new Item('standardItem', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 0;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Aged Brie" increments quality', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 10;
        const quality = 0;
        const gildedRose = new GildedRose([ new Item('Aged Brie', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 1;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Aged Brie" and quality reaches upper limit does not increment quality', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 10;
        const quality = 50;
        const gildedRose = new GildedRose([ new Item('Aged Brie', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 50;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Aged Brie" and sellin negative increments quality twice', function() {
        
        //Arrange block  (SetUp)
        const sellIn = -1;
        const quality = 0;
        const gildedRose = new GildedRose([ new Item('Aged Brie', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 2;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Aged Brie" and sellin is zero increments quality one', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 0;
        const quality = 49;
        const gildedRose = new GildedRose([ new Item('Aged Brie', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 50;
        checkQuality(items[0], expectetQuality);
    });
    
    it('updateQuality when item name is "Backstage passes to a TAFKAL80ETC concert" and sellIn is below first limit increments quality with two', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 10;
        const quality = 0;
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 2;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Backstage passes to a TAFKAL80ETC concert" and sellIn is below second limit increments quality with three', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 5;
        const quality = 0;
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 3;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Backstage passes to a TAFKAL80ETC concert" and sellIn is negative quality is zero', function() {
        
        //Arrange block  (SetUp)
        const sellIn = -1;
        const quality = 4;
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 0;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Backstage passes to a TAFKAL80ETC concert" and sellin is equal to first limit increse quality with one', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 11;
        const quality = 47;
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 48;
        checkQuality(items[0], expectetQuality);
    });

    it('updateQuality when item name is "Backstage passes to a TAFKAL80ETC concert" and sellin is zero quality drops to zero', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 0;
        const quality = 49;
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 0;
        checkQuality(items[0], expectetQuality);
    });
    
    it('updateQuality when item name is "Sulfuras, Hand of Ragnaros" quality does not change', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 5;
        const quality = 10;
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 10;
        checkQuality(items[0], expectetQuality);
    });

    //
    it('updateQuality when item name is "Sulfuras, Hand of Ragnaros" and sellIn negative quality does not change', function() {
        
        //Arrange block  (SetUp)
        const sellIn = -1;
        const quality = 10;
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectetQuality = 10;
        checkQuality(items[0], expectetQuality);
    });
    //
    it('updateQuality when item name is "Sulfuras, Hand of Ragnaros" sellIn does not change', function() {
        
        //Arrange block  (SetUp)
        const sellIn = 10;
        const quality = 10;
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', sellIn, quality) ]);

        //Acting block (execute)
        const items = gildedRose.updateQuality();

        //Assert block (verify)        
        const expectedSellIn = 10;
        expect(items[0].sellIn).to.equal(expectedSellIn);        
    });

});

function checkQuality(item: Item, expectetQuality: number) {
    expect(item.quality).to.equal(expectetQuality);
}

