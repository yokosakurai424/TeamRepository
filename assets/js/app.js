$(function () {

    $(`.arrow`).click(function () {

        $(`html`).animate({scrollTop: 0}, 1000);
    })

    $(window).scroll(function() {

        let scrollTopValue = $(document).scrollTop();
        

        if (scrollTopValue > 500) {

            $(`.arrow`).fadeIn();
        } else {

            $(`.arrow`).fadeOut();
        }
    })
    

})