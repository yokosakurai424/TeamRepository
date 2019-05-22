$(function() {
    $(".button ul").click(function() {
        $(this).siblings().find("li").hide();
        $(this).children().slideDown();
    })
})


// $(function() {
//     //ddmenuの子要素のliにマウスがあたったら
//     $(".ddmenu li").mouseenter(function() {

//         //フォーカスされたliの兄弟がもつulを非表示にする
//         $(this).siblings().find("ul").hide();

//         //フォーカスされたliの子要素を表示
//         $(this).children().slideDown();

//         //画面のどこかがクリックされたらの処理
//         $("html").click(function() {
//             //スライドアップの機能が適用される
//             $(".ddmenu ul").slideUp();
//         });
//     });


//     <header>
//     <nav>
//       <ul class="ddmenu">
//         <li><a href="#">HTML</a>
//           <ul>
//             <li><a href="#">HTML-1</a></li>
//             <li><a href="#">HTML-2</a></li>
//           </ul>
//         </li>