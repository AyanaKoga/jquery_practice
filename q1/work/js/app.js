$(function () {
  /*q1---------------------------------*/
  //idのq1を指定して文字の色を変更
  $('#q1').css('color', 'green');


  /*q2---------------------------------*/
    //idのq2を指定し要素クリック時に変化をつける
    $('#q2').on('click', function () {
      //クリック後のボタンの背景色変更指定
      $(this).css('background', 'pink');
    });


  /*q3---------------------------------*/
  //idのq3を指定し要素クリック時に変化をつける
  $('#q3').on('click', function () {
    //クリック後、q3にアニメーションをつける
    $(this).animate({
      //クリック後、opacityを使い要素を透過
      opacity: 0,
    },
      //透過時は３秒で消える
      3000
    );
  });


  /*q4---------------------------------*/
  //idのq4を指定し要素クリック時に変化をつける
  $('#q4').on('click', function () {
    //クリック後、q4のcssの内容に変化をつける
    $(this).css({
      //クリック後のサイズ設定
      width: '300px',
      padding: '50px',
      fontsize: '20px'
    },
    );
  });


  /*q5---------------------------------*/
  //idのq5を指定し要素クリック時に変化をつける
  $('#q5').on('click', function () {
    //クリック後、DOM内のq5前に追加
    $(this).prepend('DOMの中の前');
    //クリック後、DOM内のq5後に追加
    $(this).append('DOMの中の後');
    //クリック後、DOM外の要素前に追加
    $(this).before('DOMの前');
    //クリック後、DOM外の要素後に追加
    $(this).after('DOMの後');
  });


  /*q6---------------------------------*/
  //idのq6を指定し要素クリック時に変化をつける
  $('#q6')
    .on('click', function () {
      //クリック後、q6にアニメーションをつける
      $(this).animate({
        //marginを使い要素の移動位置指定
        marginTop: '100px',
        marginLeft: '100px'
      },
        //２秒で移動
        2000,
        'swing'
      );
    });


  /*q7---------------------------------*/
  //idのq7を指定し要素クリック時に変化をつける
  $("#q7").on('click', function () {
    //ブラウザのコンソールに変数の中身を出力
    console.log(this);
  });


  /*q8---------------------------------*/
  //idのq8を指定し要素ホバー時に変化をつける
  $('#q8').on('mouseover', function () {
    //ホバー時のサイズ設定
    $(this).addClass('large');
  });
  //idのq8を指定し要素ホバーアウト時に変化
  $('#q8').on('mouseout', function () {
    //ホバーアウト後のサイズ設定
    $(this).removeClass('large');
  });


/*q9---------------------------------*/
    //idのq9を指定し要素クリック時に変化をつける
  $('#q9 li').on('click', function () {
    //index参照しアラート表示
    alert($(this).index());
  });


/*q10+q11---------------------------------*/
// HTMLのq10とq11のidを取得する
const q10Items = document.querySelectorAll('#q10 li');
const q11Items = document.querySelectorAll('#q11 li');
//q10のli要素にクリックイベントを追加する
//クリックされたli要素のindexを取得する
//取得したindexを用いて、q11の対応するli要素のfont-sizeを変更する
//li要素が後から追加されても、ul要素自体にクリックイベントを設定し、クリックされたli要素を取得するようにする。
q10Items.forEach((item, index) => { item.addEventListener('click', () => { q11Items[index].classList.add('large-text'); });});

});
