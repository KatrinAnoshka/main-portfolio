$(document).ready(function() {

  /************* Button menu *************/

  $('.toggle_but').on('click', function(){
    $('.toggle_but').toggleClass('tog_mnu');
    $('.st-container').toggleClass('st-menu-open');    
    $('.st-container').toggleClass('st-effect');    
  });

  $('.st-menu a').on('click', function(){
    $('.st-container').removeClass('st-menu-open');    
    $('.st-container').removeClass('st-effect');  
    $('.toggle_but').toggleClass('tog_mnu');
  });

  /******** MixItUp - Projects animation ********/

  $(function(){ 
    $(".projects-sect").mixItUp({
      selectors: {
        target:'.mix',
        filter:'.filter'
      },
      animation: {
        enable:true,
        effects:'scale fade',
        duration:700
      }
    });
  });

  /************ Top arraw ************/

  $(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  /********* Bottom arraw *********/

  $(".arrow-bottom").click(function() {
    $("html, body").animate({ scrollTop: $("#st-container").height()+70 }, "slow");
    return false;
  });

  /************** Sending the form **************/

  $("form").submit(function(e) {
    var ths = $(this);
    e.preventDefault;
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      alert("Thank You!");
      setTimeout(function() {
        $("form").trigger("reset");
      }, 1000);
    });
    return false;
  });

 /************* Menu links *************/
  $(function() {
    $('a[href^="#"]').click(function () { 
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body').animate( { scrollTop: destination }, 1100 );
        $('html').animate( { scrollTop: destination }, 1100 );
        return false;
    });
  });
  /************ Smooth scrolling ************/

  jQuery.scrollSpeed(100, 800);

  /************* Tools animation in loading *************/

  $(".tools-sect").waypoint(function() {
    $(".tls-item").each(function(index) {
      var ths = $(this);
      setInterval(function() {
        ths.addClass("on");
      }, 200*index);
    });
  }, {
    offset : "30%"
  });

  /********* Projects animation in loading *********/

  $(".projects-sect").waypoint(function() {

    $(".pr-content .info-item").each(function(index) {
      var ths = $(this);
      setInterval(function() {
        ths.removeClass("pr-off").addClass("pr-on");
      }, 400*index);
    });

  }, {
    offset : "20%"
  });

  
});//<--/(document).ready -->



            
      








