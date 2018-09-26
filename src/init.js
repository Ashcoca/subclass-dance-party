$(document).ready(function() {
  window.dancers = [];



  /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

  /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log($(this).data('dancer-maker-function-name'))

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(window[dancerMakerFunctionName]);
    
    // make a dancer with a random position
    // console.log(dancerMakerFunction); // "MakeBlinkyDancer" function
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append('<img class="hamster animated infinite rollIn" src="assets/css/HamsterDance.gif">');
    $('body').append('<img class="mario animated infinite flash bounce" src="assets/css/duet.gif">');
    $('body').append('<img class="raninbowBanana animated infinite zoomInDown" src="assets/css/raninbowBanana.gif">');
    $('body').append(dancer.$node);

    $('img').each(function() {
      // what is this pointing to ?   
      window.dancers.push($(this)[0]);
        
    });
    const randomIndex = function(numberOfDancers) {
      const max = numberOfDancers.length;
      const min = 0;
      return Math.floor(Math.random(max - min) + min);
    };
  });
  
  $('.addFruitDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append('<img class="strawberry fruit" src="assets/css/strawberry.gif">');
    $('body').append('<img class="pineappleBanana fruit" src="assets/css/pineappleBanana.gif">');
    $('body').append('<img class="burningBanana fruit" src="assets/css/burningBanana.gif">');
    $('body').append('<img class="hatBanana fruit" src="assets/css/hatBanana.gif">');
    $('body').append('<img class="Peanut-butter-jelly-time fruit" src="assets/css/Peanut-butter-jelly-time.gif">');
    $('body').append(dancer.$node);
  });
  
  
  $('.addVegetableDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append('<img class="carrotBanana animated infinite bounce"  src="assets/css/carrotBanana.gif">');
    $('body').append('<img class="greenBanana animated infinite bounce"" src="assets/css/greenBanana.gif">');
    $('body').append(dancer.$node);
  });
  
  /*line Up*/
  $('.lineUpDancerButton').on('click', function() {
    $('img').appendTo('.row');
  });

  // window.dancers
  // var angle1 = -20;
  // var angle2 = -10;
  // var angle3 = 10;
  // $('body').on('click', 'img', function() {
  //   angle1 = angle1 + 10;
  //   // what is toggleClass
  //   $('img').css('webkit-transform', 'rotate(' + angle1 + 'deg');//('rotated');
  // });
  
  $('img').hover(function() {
    $(this).css('webkit-transform', 'scale(' + 1.5 + ')');
  }, function() {
    $(this).css('webkit-transform', 'scale(1.0)');
  });
});

