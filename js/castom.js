$(document).ready(function(){

var showruv = $(window);
  var sticky = $('#sticky-header');
  showruv.on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 200) {
      sticky.removeClass("sticky");
   }else{
    $("#sticky-header").addClass("sticky");
   }
  });
   $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    new WOW().init();

$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '200', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up">', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

$('#nav').onePageNav();

var $grid = $('.cover').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth:1
  }
})
// filter items on button click
$('.button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.popup').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  },

  // other options
});



});