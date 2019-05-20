$(function(){

    $(window).scroll(function(){
        let scrollTop =$(document).scrollTop();

        if(scrollTop > 500){
            $('.arrow').fadeIn();
        } else{
            $('.arrow').fadeOut();
        }
    })
})