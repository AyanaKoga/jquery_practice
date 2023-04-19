/*q1---------------------------------*/
$(function(){
  //idのq1を指定して文字の色を変更
  $('#q1').css('color','green');
});


/*q2---------------------------------*/
$(function(){
  //idのq2を指定し要素クリック時に変化をつける
  $('#q2').on('mousedown',function(){
    //クリック後のボタンの背景色変更指定
      $('#q2').css('background','pink');
  });
});



/*q3---------------------------------*/
$(function(){
  //idのq3を指定し要素クリック時に変化をつける
  $('#q3').on('mousedown',function(){
    //クリック後、q3にアニメーションをつける
    $('#q3').animate({
    //クリック後、opacityを使い要素を透過
      opacity: 0,
    },
    //透過時は３秒で消える
    3000
      );
  });
});


/*q4---------------------------------*/
$(function(){
  //idのq4を指定し要素クリック時に変化をつける
  $('#q4').on('mousedown',function(){
    //クリック後、q4のcssの内容に変化をつける
    $('#q4').css({
    //クリック後のサイズ設定
        width: '300px',
        padding: '50px',
        fontsize: '20px'
    },
      );
  });
});



/*q5---------------------------------*/
$(function(){
  //idのq5を指定し要素クリック時に変化をつける
  $('#q5').on('mousedown',function(){
        //クリック後、DOM内のq5前に追加
      $('#q5').prepend('DOMの中の前');
        //クリック後、DOM内のq5後に追加
      $('#q5').append('DOMの中の後');
        //クリック後、DOM外の要素前に追加
      $('.center').eq(4).prepend('DOMの前');
        //クリック後、DOM外の要素後に追加
      $('.center').eq(4).append('DOMの後');
  });
});



/*q6---------------------------------*/
$(function(){
  //idのq6を指定し要素クリック時に変化をつける
  $('#q6')
  .on('mousedown',function(){
    //クリック後、q6にアニメーションをつける
    $('#q6').animate({
    //marginを使い要素の移動位置指定
      marginTop: '100px',
      marginLeft: '100px'
    },
    //２秒で移動
    2000,
    'swing'
      );
  });
});



/*q7---------------------------------*/
$(function () {
  //idのq7を指定し要素クリック時に変化をつける
  $("#q7").on('mousedown', function () {
  //ブラウザのコンソールに変数の中身を出力
  console.log(this);
  });
  });



/*q8---------------------------------*/
$(function(){
  //idのq8を指定し要素ホバー時に変化をつける
  $('#q8').on('mouseover',function(){
    //q8のcssの内容に変化をつける
    $('#q8').css({
    //ホバー時のサイズ設定
        width: '300px',
        padding: '50px',
        fontsize: '20px'
    },
      );
  });
  //idのq8を指定し要素ホバーアウト時に変化
  $('#q8').on('mouseout',function(){
    //クリック後、q8のcssの内容に変化をつける
    $('#q8').css({
    //ホバーアウト後のサイズ設定
        width: '',
        padding: '',
        fontsize: ''
    },
      );
  });
});



/*q9---------------------------------*/
$(function(){
  //idのq9のli(Q9-1)を指定し要素クリック時に変化をつける
  $('#q9 li:nth-child(1)').on('mousedown',function(){
    //Q9-1クリック後、アラートで0
    alert('0');
  });
    //idのq9のli(Q9-2)を指定し要素クリック時に変化をつける
  $('#q9 li:nth-child(2)').on('mousedown',function(){
    //Q9-2クリック後、アラートで1
    alert('1');
  });
    //idのq9のli(Q9-3)を指定し要素クリック時に変化をつける
  $('#q9 li:nth-child(3)').on('mousedown',function(){
    //Q9-3クリック後、アラートで2
    alert('2');
  });
    //idのq9のli(Q9-4)を指定し要素クリック時に変化をつける
  $('#q9 li:nth-child(4)').on('mousedown',function(){
    //Q9-4クリック後、アラートで3
    alert('3');
  });
});




/*q10+q11---------------------------------*/
$(function(){
  //idのq10のli(Q10-1)を指定し要素クリック時に変化をつける
  $('#q10 li:nth-child(1)').on('mousedown',function(){
    $('#q11 li:nth-child(1)').css('font-size','30px');
  });
  //idのq10のli(Q10-1)を指定し要素クリック時に変化をつける
  $('#q10 li:nth-child(2)').on('mousedown',function(){
    $('#q11 li:nth-child(2)').css('font-size','30px');
  });
  //idのq10のli(Q10-1)を指定し要素クリック時に変化をつける
  $('#q10 li:nth-child(3)').on('mousedown',function(){
    $('#q11 li:nth-child(3)').css('font-size','30px');
  });
  //idのq10のli(Q10-1)を指定し要素クリック時に変化をつける
  $('#q10 li:nth-child(4)').on('mousedown',function(){
    $('#q11 li:nth-child(4)').css('font-size','30px');
  });
});






