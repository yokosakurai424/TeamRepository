$(function() {

    $(".textanime").textFx({
        type: "rotate", iChar: "50", iAnim: "1000"
    });

    $("span").hover(function() {
        $(this).css("color", "yellow");
    }, function() {
        $(this).css("color", "");
    })
    
});