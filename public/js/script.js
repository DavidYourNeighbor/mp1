$("#introduction, #middlesection, #pastproductions, #middlesection2, #gettoknowus").on("click",function(a){a.preventDefault();var b;"introduction"==$(this).get(0).href?b=$("introduction"):"middlesection"==$(this).get(0).href?b=$("middlesection"):"middlesection2"==$(this).get(0).href?b=$("middlesection2"):"pastproductions"==$(this).get(0).href?b=$("pastproductions"):"gettoknowus"==$(this).get(0).href&&(b=$("gettoknowus")),$("html, body").stop().animate({scrollTop:b.offset().top},300)});var $items=$(".carouselcontainer div");$("button").click(function(){index=$(".carouselcontainer div:visible").index(),$items.hide().eq((index+$items.length+1*$(this).attr("data-mod"))%$items.length).css("display","inline-block")});