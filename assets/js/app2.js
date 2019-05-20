$(function() {
    $("span").hover(function() {
        $(this).css("color", "yellow");
    }, function() {
        $(this).css("color", "");
    })
})