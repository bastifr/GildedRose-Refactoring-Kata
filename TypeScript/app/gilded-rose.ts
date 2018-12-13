export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    private readonly agedBrie = 'Aged Brie';
    private readonly backstagePass = 'Backstage passes to a TAFKAL80ETC concert';
    private readonly sulfuras = 'Sulfuras, Hand of Ragnaros';

    

    private readonly firstLimitSellinBackstagePass = 11;
    private readonly secondLimitBackstagePass = 6;
    private readonly qualityLimit = 50;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            this.updateItem(item);
        });
        return this.items;
    }

    private updateItem(item: Item) {
        if (item.name != this.agedBrie && item.name != this.backstagePass) {
            if (item.quality > 0) {
                if (item.name != this.sulfuras) {
                    item.quality = item.quality - 1;
                }
            }
        }
        else {
            if (item.quality < this.qualityLimit) {
                item.quality = item.quality + 1;
                if (item.name == this.backstagePass) {
                    this.updateQualityBasedOnSellInForBackstagePass(item);
                }
            }
        }
        if (item.name != this.sulfuras) {
            item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {           
            if (item.name == this.agedBrie) {
                this.updateQualityBasedOnQualityLimitForAgedBrie(item);
            }
            else {
                if (item.name == this.backstagePass) {
                    this.resetQualityForBackstagePass(item);
                }
                else {
                    if (item.quality > 0) {
                        if (item.name != this.sulfuras) {
                            item.quality = item.quality - 1;
                        }
                    }
                }
            }
        }
    }

    private updateQualityBasedOnQualityLimitForAgedBrie(item: Item) {
        if (item.quality < this.qualityLimit) {
            item.quality = item.quality + 1;
        }
    }

    private resetQualityForBackstagePass(item: Item) {
        item.quality = item.quality - item.quality;
    }

    private updateQualityBasedOnSellInForBackstagePass(item: Item) {
        if (item.sellIn < this.firstLimitSellinBackstagePass) {
            if (item.quality < this.qualityLimit) {
                item.quality = item.quality + 1;
            }
        }
        if (item.sellIn < this.secondLimitBackstagePass) {
            if (item.quality < this.qualityLimit) {
                item.quality = item.quality + 1;
            }
        }
    }
}
