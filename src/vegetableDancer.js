var MakeVegetableDancer = function() {
  MakeFruitDancer.call(this);
};

MakeVegetableDancer.prototype = Object.create(MakeFruitDancer.prototype);

MakeVegetableDancer.prototype.constructor = MakeVegetableDancer;