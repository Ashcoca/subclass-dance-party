/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
// console.log(blinkyDancer.__proto__ === makeDancer)

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();wq
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};*/

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
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

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
// console.log(MakeBlinkyDancer.prototype)
MakeBlinkyDancer.prototype.step = function() {
  // this.oldStep();
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};


  
