describe("Gilded Rose", function() {
  it('has items initialised', function() {
    expect(items.length).toEqual(6)
  })

  it('quality value for items is not negative', function() {
    expect(items.filter(function(item){ if(item.quality < 0 ) return true }).length).toEqual(0)
  })

  it('quality of aged brie increses with time', function() {
    update_quality()

    expect(items[0].quality).toEqual(19)
    expect(items[0].sell_in).toEqual(9)

    //value for aged brie increases with each update() --called at each passing day-- in sell_in
    expect(items[1].quality).toEqual(1)
    expect(items[1].sell_in).toEqual(1)

    expect(items[2].quality).toEqual(6)
    expect(items[2].sell_in).toEqual(4)

    expect(items[3].quality).toEqual(80)
    expect(items[3].sell_in).toEqual(0)

    expect(items[4].quality).toEqual(21)
    expect(items[4].sell_in).toEqual(14)

    expect(items[5].quality).toEqual(4)
    expect(items[5].sell_in).toEqual(2)
  })

  it('quality value for items is less then 50 if it is not sulfuras', function() {
    var nonSulfurasArray = items.filter(function(item){ if(!item.name.includes("Sulfuras")) return true })
    expect(nonSulfurasArray.filter(function(item){ if(item.quality > 50) return true }).length).toEqual(0)
  })

  it('quality value for sulfuras remains same', function() {
    update_quality()

    expect(items[3].quality > 80).toEqual(false)
    expect(items[3].sell_in).toEqual(0)

    expect(items[5].sell_in).toEqual(1)
    expect(items[5].quality).toEqual(2)
  })

  it('Backstage increase in quality for sell_in > 10', function() {
    update_quality()
    expect(items[4].quality).toEqual(23)
    expect(items[4].sell_in).toEqual(12)

    update_quality()
    expect(items[4].quality).toEqual(24)
    expect(items[4].sell_in).toEqual(11)
  })

  it('Backstage increase 2 in quality for 10 > sell_in > 5', function() {
    for(var i=0;i<2;i++){update_quality()}
    expect(items[4].quality).toEqual(27)
    expect(items[4].sell_in).toEqual(9)
  })

  it('Backstage increase 2 in quality for 5 > sell_in > 0', function() {
    for(var i=0;i<5;i++)update_quality()
    expect(items[4].quality).toEqual(38)
    expect(items[4].sell_in).toEqual(4)
  })

  it('Backstage quality becomes zero for sell_in decreasing to 0', function() {
    for(var i=0;i<5;i++)update_quality()
    expect(items[4].quality).toEqual(0)
    expect(items[4].sell_in).toEqual(-1)
  })
});
