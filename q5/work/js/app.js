$(function() {
  //ul.dropdwn li指定し、要素をhoverすると変化
  $("ul.dropdwn li").hover(function() {
    //.dropdwn_menuをhover中処理の追加なしで表示
    $(".dropdwn_menu:not(:animated)",this).slideDown();
    },
    //.dropdwn_menuにhoverしてない時は非表示
  function(){
    $(".dropdwn_menu",this).stop().slideUp();
    }
  );
});



