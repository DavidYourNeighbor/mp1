$(document).ready(function() {
    $('a[anchor]').click(function(scrollerFunc) {
        scrollerFunc.preventDefault();
        var anchor = $(this).attr('anchor');
        var top = $('div[name='+anchor+']').offset().top;
        $('html, body').animate({scrollTop:top}, 300);
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.headernavbar').addClass("resize");
    }
    else{
        $('.headernavbar').removeClass("resize");
    }
});

var $pictures = $(".carouselcontainer div");
$("button").click(function(){
    showthis = $(".carouselcontainer div:visible").index();
    hidethese = $pictures.length + showthis + + ($(this).attr("data-mod") * 1);
    hidethese = hidethese % $pictures.length;
    $pictures.hide().eq(hidethese).css("display", "inline-block");
});
