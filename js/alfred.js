// run some alfred functions
$(function() {
    $('.togglenav').on('click', function() {
        $('wrap').toggleClass('toggled');
    });
    $('.togglesearch').on('click', function() {
        $('searchbox').addClass('toggled');
        $('#sr').on('click', function(){
          $('searchbox').removeClass('toggled');
        });
    });
});
$(document).ready(function() {
    //
});
