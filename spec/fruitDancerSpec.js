
describe('fruitDancer', function() {

  var fruitDancer;

  beforeEach(function() {
    // new MakeBlinkyDancer(10, 20, timeBetweenSteps);
    fruitDancer = new MakeFruitDancer();

  });
  
  it('should have a jQuery $node object', function() {
    expect(fruitDancer.$node).to.be.an.instanceof(jQuery);
  });

});
  