$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position
    console.log(dancerMakerFunction); // "MakeBlinkyDancer" function
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer)
    // console.log('i am dancer', dancer)
    // console.log(dancer.$node)
    // $('body').append('<img src="assets/css/793.gif">')
    // $('body').append('<img src="assets/css/americanPsycho.gif">')
    $('body').append('<img src="assets/css/strawberry.gif">')
    // $('body').append('<img src="assets/css/peanutButterJellyTime.gif">')
    $('body').append('<img src="assets/css/carrotBanana.gif">')
    $('body').append('<img src="assets/css/greenBanana.gif">')
    // $('body').append('<img src="assets/css/orangeBanana.gif">')
    $('body').append('<img src="assets/css/pineappleBanana.gif">')
    $('body').append('<img src="assets/css/burningBanana.gif">')
    $('body').append('<img src="assets/css/hatBanana.gif">')
    // $('body').append('<img src="assets/css/duet.gif">')
    $('body').append('<img src="assets/css/raninbowBanana.gif">')
    $('body').append('<img src="assets/css/Peanut-butter-jelly-time.gif">')
    $('body').append(dancer.$node);
  });
  
  
  
});

