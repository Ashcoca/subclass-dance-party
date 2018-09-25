var MakeFruitDancer = function() {
  MakeBlinkyDancer.call(this);//, top, left, timeBetweenSteps);
  // this.oldStep = this.step;
  // debugger;
  // this.blinkyDancer = Object.create(MakeDancer.prototype, top, left, timeBetweenSteps);
  
  // console.log(blinkyDancer)
  // MakeDancer.call(top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(this.blinkyDancer.step)
  // console.log(this.blinkyDancer.step)
  
};

MakeFruitDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeFruitDancer.prototype.constructor = MakeFruitDancer;
// console.log(MakeFruitDancer.prototype)
MakeFruitDancer.prototype.step = function() {
  // this.oldStep();
  MakeBlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};