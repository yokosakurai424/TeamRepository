$(function() {

    $(".textanime").textFx({
        type: "rotate", iChar: "20", iAnim: "1000"
    });

    $(".textanime").hover(function() {
        $(this).css("color", "yellow");
    }, function() {
        $(this).css("color", "");
    })
    

});