function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

Item.prototype.updateQuality = function () { }

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && items[i].quality > 0 && items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].quality-- // decreases value for not Aged Brie, Backstage and Sulfuras
      if (items[i].name == 'Conjured Mana Cake') items[i].quality--// decreases value 2 for Conjured -- added value for conjured addition
    } else if (items[i].quality < 50) {
      items[i].quality++ // increases value for Aged Brie and Backstage
      if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && items[i].sell_in < 11) {
        items[i].quality++// increases value to 2 for Backstage 11 > sell_in > 5
        if (items[i].sell_in < 6) items[i].quality++ // increases value to 3 for Backstage 5 > sell_in > 0
      }
    }

    if (items[i].name != 'Sulfuras, Hand of Ragnaros') items[i].sell_in-- // decreasing value for sell in in the item is not Sulfuras

    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && items[i].quality > 0 && items[i].name != 'Sulfuras, Hand of Ragnaros' ? items[i].quality-- : items[i].quality = 0
      } else if(items[i].quality < 50)
        items[i].quality++
    }
  }
}

function update_quality_itemized(){

}
