$('#introduction, #middlesection, #pastproductions, #middlesection2, #gettoknowus').on('click', function(e){
   e.preventDefault();
    var scrollToThis;
    if($(this).get(0).href == 'introduction') {
        scrollToThis = $('introduction');
    }
    else if($(this).get(0).href == 'middlesection'){
        scrollToThis = $('middlesection');
    }
    else if($(this).get(0).href == 'middlesection2'){
        scrollToThis = $('middlesection2');
    }
    else if($(this).get(0).href == 'pastproductions'){
        scrollToThis = $('pastproductions');
    }
    else if($(this).get(0).href == 'gettoknowus'){
        scrollToThis = $('gettoknowus');
    }
    $('html, body').stop().animate({scrollTop: scrollToThis.offset().top}, 300);
});


var $items = $(".carouselcontainer div");
$("button").click(function(){
    index = $(".carouselcontainer div:visible").index();
    $items.hide().eq(
        (index + $items.length + ($(this).attr("data-mod") * 1)) % $items.length).css("display", "inline-block");
});
