$(function(){
  //.select-box内の要素選択時に、changeイベント発生し選択した値取得
  $(".select-box").on('change',function() {
    //変数用意し、選択した.select-box内の値取得する
    let category = $(this).val();
    //変数categoryを使用した場合のif。all選択時は全項目表示
    if (category === 'all') {
      //.select-box内の要素選択時.food-list内でループ処理加える
      $('.food-list li').each(function() {
        //.food-list内の項目表示
        $(this).show();
      });
      //前述したもの以外の場合のif
    } else if (category) {
      //.select-box内の要素選択時.food-list内でループ処理加える
      $('.food-list li').each(function() {
        //.food-list内の値は、data-category-type属性使用により、変数categoryと同じ値を取得
        if ($(this).data('category-type') === category) {
          //.food-list内の選択項目表示
          $(this).show();
        } else {
          //.food-list内の選択以外の項目非表示
          $(this).hide();
        }
      });
    }
  });
});



