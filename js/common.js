$(document).ready(function(){ //시작

    $(".depth2").hide();
    $("header nav > .depth1 > li").mouseenter(function(){
        $(".depth2").stop().slideDown(300);
    });

    $("header nav > .depth1 > li").mouseleave(function(){
        $(".depth2").stop().slideUp(300);
    });

    $("footer").mouseenter(function(){
        $(".go-top-wrap").hide();
    });

    $("footer").mouseleave(function(){
        $(".go-top-wrap").show();
    });
}) //끝