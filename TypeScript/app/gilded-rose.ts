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
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != this.agedBrie && this.items[i].name != this.backstagePass) {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != this.sulfuras) {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < this.qualityLimit) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == this.backstagePass) {
                        if (this.items[i].sellIn < this.firstLimitSellinBackstagePass) {
                            if (this.items[i].quality < this.qualityLimit) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < this.secondLimitBackstagePass) {
                            if (this.items[i].quality < this.qualityLimit) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != this.sulfuras) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != this.agedBrie) {
                    if (this.items[i].name != this.backstagePass) {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != this.sulfuras) {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < this.qualityLimit) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
