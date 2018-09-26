var MakeFruitDancer = function() {
  MakeBlinkyDancer.call(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.zoom();

};

MakeFruitDancer.prototype = Object.create(MakeBlinkyDancer.prototype);

MakeFruitDancer.prototype.constructor = MakeFruitDancer;

