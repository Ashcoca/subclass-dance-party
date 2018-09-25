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
    console.log(dancer);
    // console.log('i am dancer', dancer)
    // console.log(dancer.$node)
    // $('body').append('<img src="assets/css/793.gif">')
    // $('body').append('<img src="assets/css/americanPsycho.gif">')
    $('body').append('<img class="strawberry" src="assets/css/strawberry.gif">');
    // $('body').append('<img src="assets/css/peanutButterJellyTime.gif">')
    $('body').append('<img class="carrotBanana" src="assets/css/carrotBanana.gif">');
    $('body').append('<img class="greenBanana" src="assets/css/greenBanana.gif">');
    // $('body').append('<img src="assets/css/orangeBanana.gif">')
    $('body').append('<img class="pineappleBanana" src="assets/css/pineappleBanana.gif">');
    $('body').append('<img class="burningBanana" src="assets/css/burningBanana.gif">');
    $('body').append('<img class="hatBanana" src="assets/css/hatBanana.gif">');
    // $('body').append('<img src="assets/css/duet.gif">')
    $('body').append('<img class="raninbowBanana" src="assets/css/raninbowBanana.gif">');
    $('body').append('<img class="Peanut-butter-jelly-time" src="assets/css/Peanut-butter-jelly-time.gif">');
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
  // window.dancers
    var angle1 = -20;
    var angle2 = -10;
    var angle3 = 10;
  $('body').on('click', 'img', function() {
    angle1 = angle1 + 10;
    // what is toggleClass
    $('img').css('webkit-transform', 'rotate('+angle1+'deg')//('rotated');
    $('img').on('mouseover', function() {
        // $('img').css('transform': scale(1.5);)
        $('img').css({"-webkit-transform":"scale("+scale_width+","+scale_height+")"})    
    })
  });
    


// $(window).load(function() {
//   $('.dancer').on('click', function(event) {
//     // var clickedImg = $(this).attr('img');
//       alert('You clicked on the image!'); // working
//     });
  

});

