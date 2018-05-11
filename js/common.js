/******** Menu efffect ********/

    /* 
    Inspired from: https://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/

    there are still some quirks for animation 3, 6, 7, 8 & 14 
    as they do not animate back gracefully  
    (those are the navs in the div with class st-pusher)
    */

var click = document.querySelectorAll('.toggle_but');
var menu = document.querySelector('#st-container');
var pusher = document.querySelector('.st-pusher');
// to store the corresponding effect
var effect;

// adding a click event to all the buttons
for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', addClass)
}

pusher.addEventListener('click', closeMenu);

function addClass(e) {
  // to get the correct effect
  effect = e.target.getAttribute('data-effect');
  // adding the effects
  menu.classList.toggle(effect);
  menu.classList.toggle('st-menu-open');
  
  // console.log(e.target.getAttribute('data-effect'));
}

function closeMenu(el) {
  // if the click target has this class then we close the menu by removing all the classes
  if (el.target.classList.contains('st-pusher')) {
    menu.classList.toggle(effect);
    menu.classList.toggle('st-menu-open');
    // console.log(el.target);
  } 
}



$(document).ready(function() {

  /************* Button menu *************/

  $('.toggle_but').on('click', function(){
    $('.toggle_but').toggleClass('tog_mnu');
  });

  /******** mixItUp - Projects animation ********/

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

  // Стрелка наверх
  $(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


  // Стрелка вниз с Хэдера
  $(".arrow-bottom").click(function() {
    $("html, body").animate({ scrollTop: $("#st-container").height()+70 }, "slow");
    return false;
  });

  /************** Аякс отправка форм **************/

  $("form").submit(function(e) {
    var ths = $(this);
    e.preventDefault;
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      alert("Thank You!");
    });
    return false;
  });

  // Плавный скроллинг
  jQuery.scrollSpeed(100, 800);

  // Tools animation
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

  // Projects animation in loading
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

  
});



            
      








