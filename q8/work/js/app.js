$(document).ready(function () {
  //検索ボタンのクリックイベント
  $(function () {
    $('.search-btn').click(function () {
      const searchWord = $('#search-input').val();
      const pageCount = 1;
      const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
      }
      $.ajax(settings).done(function (response) {
        const result = response['@graph'];
        displayResult(result)
      }).fail(function (err) {
        displayError(err)
      });
    });

    //リセットボタンのクリックイベント
    $('.reset-btn').click(function () {
      $('#search-input').val('');
      $('.lists').html('');
    });

    //検索結果を表示する関数
    function displayResult(result) {
      let html = '';
      for (let i = 0; i < result.length; i++) {
        const title = result[i].title;
        const author = result[i].author;
        html += `<li>Title: ${title}, Author: ${author}</li>`;
      }
      $('.lists').html(html);
    }


    //エラーを表示する関数
    function displayError(err) {
      $('.lists').html(`<li>Error: ${err.statusText}</li>`);
    }
  });
});






// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

