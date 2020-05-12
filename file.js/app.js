/*global console, alert, swal, prompt, $*/
$(document).ready(function () {
  'use strict';
  // if scrollTop navbar is fixed
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed-top shadow-lg')
    } else {
      $('.navbar').removeClass('fixed-top shadow-lg')
    }
  })

  // When click in this, the main_iframe change attr_src 
  $('.box_video').on('click', function() {
    $('#main_iframe').attr('src', $(this).find('li:first-of-type .embed-responsive .child_iframe').attr('src'))
  })

  // when click toggle class show
  $('.box-text span.show').on('click', function() {
    console.log($(this).prev().toggleClass('show'))
  })

  // edit themeScroll in some element
  // start element have nicescroll
  $("body").niceScroll({
    cursorcolor: "#191b48",
    cursorwidth: "10px",
    background: "rgba(0, 0, 0, 0.3)",
    cursorborder: "none",
    cursorborderradius: 0
  });  // a world full of color!

  $(".top_value, .box_list_video").niceScroll({
    cursorwidth: "2px",
    cursorborder: "none",
    cursorborderradius: 0,
    cursorcolor: "#191b48",
    background: "transparent",
  });  // a world full of color!  

  $(".list_match").niceScroll({
    cursorwidth: "2px",
    cursorborder: "none",
    cursorborderradius: 0,
    cursorcolor: "#c1198a",
    background: "transparent",
  });  // a world full of color!   
})
