$(function() {
  //.nav liをクリックしたら変化
  $(".nav .nav-item").on('click',function(){
    //変数用意し.nav li内の記載文字が表示
    const index = $(".nav .nav-item").index(this);
    //.addClassでクラス名追加
    $('.description li').addClass("is-hidden");
    //変数指定し.removeClassでクラス名削除
    $('.description li').eq(index).removeClass('is-hidden');
  })
});
