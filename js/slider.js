'use strict'

$(function () {
    /*zmienne */
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100/slideCount;

    
    /*szerokość kontenera */
slideShow.css('width', slideCount * 100 + "%");
    console.log(slideWidth);
    
    /*  szerokość i położenie pojedynczego slajdu */
    
    $('.single-slide').each(function(index) {
        $(this).css({'width': slideWidth +'%', 'margin-left': index * slideWidth + '%'});
    });
    
    
    
});


