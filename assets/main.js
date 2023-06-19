// preloader
$(window).on('load', function() { 
  $('#preloader-overlay').css({"transform":"translateY(-100%)","height":$(window).height()});
  $('#preloader-overlay').css({'height':$(window).height(),'transform': 'translateY(-100%)'});
  $('#preloader').css({'height':$(window).height(),'transform': 'translateY(-100%)'});
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut(1500);
  $('body').delay(350).css({'overflow':'visible'});
});

$(document).ready(function() {
  // navbar
  var prevScrollpos = $(window).scrollTop();
    $(window).on("scroll", function() {
      var currentScrollPos = $(window).scrollTop();
      if (prevScrollpos > currentScrollPos) {
        $("#header").css("top", "0");
      } else {
        $("#header").css("top", "-100vh");
      }
      prevScrollpos = currentScrollPos;
  });
    
  $('.navbar-toggler').on('click',function(){
      $('i').toggleClass('bi-list bi-x-lg');
  })
    
  // navlink
  $('.nav-link').click(function() {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
  });
 

  // porfolio
  var firstFilter = $('[data-filter]').first();
  firstFilter.addClass("active");
  var firstFilterData = firstFilter.data().filter;
  
  var filter = firstFilterData;
  
  
    $("[data-filter]").on("click", function() {
      filter = $(this).attr("data-filter");
  
      $("[data-filter]").removeClass("active");
      $(this).addClass("active");
      console.log(filter);
      filterItems();
    });
  
    filterItems();
  
    function filterItems() {
      if (filter === firstFilterData) {
        $(".filter-item").hide();
        $(".filter-item[data-filter='" + filter + "']").show();
      } else {
        $(".filter-item").hide();
        $(".filter-item[data-filter='" + filter + "']").show();
      }
    }
});