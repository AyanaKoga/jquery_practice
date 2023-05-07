// 検索ボタンのクリックイベント
$('.search-btn').on('click', function () {
  const searchWord = $('#search-input').val();
  const pageCount = 1;
  const settings = {
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    "method": "GET",
  };

  $.ajax(settings).done(function (response) {
    let result = response['@graph'];
    console.log(response);
    displayResult(result);
    // 検索結果を表示する関数
    function displayResult(result) {
      $('.lists').empty(); // 検索結果をリセット
      if (result.length > 0) {
        const graph = result[0];
        if (graph.items && graph.items.length > 0) {
          const items = graph.items;
          for (let i = 0; i < 20 && i < items.length; i++) {
            const title = items[i].title;
            const author = items[i]["dc:creator"];
            const itemUrl = items[i].link["@id"];
            const publisherName = items[i]["dc:publisher"];
            const listItem = `
              <li class="lists-item">
                <div class="list-inner">
                  <p>作品名： ${title}</p>
                  <p>作者： ${author}</p>
                  <p>出版社： ${publisherName}</p>
                  <a href="${itemUrl}" target="_blank">リンク</a>
                </div>
              </li>
            `;
            $('.lists').append(listItem);
          }
        } else {
          $('.lists').html(`<li>検索結果が見つかりませんでした。</li>`);
        }
      } else {
        $('.lists').html(`<li>検索結果が見つかりませんでした。</li>`);
      }
    }
  }).fail(function (err) {
    displayError(err);
  });



  // エラーを表示する関数
  function displayError(err) {
    $('.lists').html(`<li>Error: ${err.statusText}</li>`);
  }

  // リセットボタンのクリックイベント
  $('.reset-btn').click(function () {
    $('#search-input').val('');
    $('.lists').html('');
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

