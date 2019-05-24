// $(function() {
//     let I = "1";

//     $(".button").on("click", function() {
//         //プラスボタンを押すと隠れているpタグが出てくる
//         if (I == "1") {
//             $(".text-show p").slideDown();
//             I = "2";
//         } else if (I == "2") {
//             $(".text-show p").slideUp();
//             I = "1";
//         }
        
//     })

//     let second = "3"
//     //2番目のプラスボタンが押されるとpタグ出てきて、隠れる
//     $(".button2").click(function() {
//         if (second == "3") {
//             $(".second-show p").slideDown();
//             second == "2"
//         } else if (second == "2") {
//             $(".second-show p").slideUp();   
//             second == "3";         
//         }
//     })

//      //3番目のプラスボタンが押されるとpタグ出てきて、隠れる
//      $(".button3").click(function() {
//         if (I =="1") {
//             $(".third-show p").slideDown();
//             I == "2"
//         } else if (I == 2) {
//             $(".third-show p").slideUp();   
//             I == "2";         
//         }
//     })

//         //2番目のプラスボタンが押されたらpタグが出てくる
//     $(".button2").click(function() {
//         $(".text-show p").slideDown();
//     })
//         //3番目のプラスボタンが押されるとpタグが隠れる
//     $(".button3").click(function() {
//         $(".second-show p").slideUp();
//     })

//     $(".button3").click(function() {
//         //プラスボタンを押すと隠れているpタグが出てくる
//         $(".third-show p").slideDown();
//     })
//     // $("html").click(function() {
//     //     //次のプラスボタンが押されるとpタグが隠れる
//     //     $(".third-show p").slideUp();
//     // })
// })

$(function() {
    $(".button").on("click", function() {
        $(this).toggleClass("bg02").next().slideToggle();
    })
})
