/*global console, alert, swal, prompt, $*/
$(document).ready(function () {
  'use strict';
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed-top shadow-lg')
    } else {
      $('.navbar').removeClass('fixed-top shadow-lg')
    }
  })
})
