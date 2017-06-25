'use strict'

$(function () {
    /*zmienne */
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100/slideCount;
    var slideIndex = 0;

    
    /*szerokość kontenera */
slideShow.css('width', slideCount * 100 + "%");
    console.log(slideWidth);
    
    /*  szerokość i położenie pojedynczego slajdu */
    
    $('.single-slide').each(function(index) {
        $(this).css({'width': slideWidth +'%', 'margin-left': index * slideWidth + '%'});
    });
    
    /*kliknięcia w strzałki */
    $('.prev-slide').click(function() {
        console.log('poprzednia');
    });
    $('.next-slide').click(function() {
        var newSlideIndex = slideIndex + 1;
              
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        slideShow.animate({'margin-left': marginLeft}, 800, function(){slideIndex = newSlideIndex});
    });
    
    
});


