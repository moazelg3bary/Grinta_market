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
})
