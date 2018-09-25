var MakeVegetableDancer = function() {
  MakeFruitDancer.call(this); //, top, left, timeBetweenSteps);
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

MakeVegetableDancer.prototype = Object.create(MakeFruitDancer.prototype);
MakeVegetableDancer.prototype.constructor = MakeVegetableDancer;
// console.log(MakeVegetableDancer.prototype)
// MakeVegetableDancer.prototype.step = function() {
//   // this.oldStep();
//   FruitDancer.prototype.step.call(this);
//   this.$node.toggle();
// };