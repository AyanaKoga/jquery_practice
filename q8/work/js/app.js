// 検索ボタンのクリックイベント
let searchWord = ''; // 検索ワードを格納する変数
let pageCount = 1; // 現在のページ番号を格納する変数

// 検索ボタンのクリックイベント
$('.search-btn').on('click', function () {
  searchWord = $('#search-input').val(); // 検索ワードを取得
  pageCount = 1; // ページ番号をリセット
  performSearch(); // 検索を実行
});

// ページ切り替えボタンのクリックイベント
$('.search-btn').on('click', function () {
  pageCount++; // ページ番号をインクリメントして次のページへ
  performSearch(); // 検索を実行
});

// 検索を実行する関数
function performSearch() {
  const settings = {
    url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    method: "GET",
  };

  $.ajax(settings)
    .done(function (response) {
      const result = response['@graph'];
      displayResult(result);
    })
    .fail(function (err) {
      displayError(err);
    });
}

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
      $('.search-btn').show(); // 次のページボタンを表示
    } else {
      $('.lists').html(`<li>検索結果が見つかりませんでした。</li>`);
    }
  } else {
    $('.lists').html(`<li>検索結果が見つかりませんでした。</li>`);
  }



  // エラーを表示する関数
  function displayError(err) {
    $('.lists').html(`<li>Error: ${err.statusText}</li>`);
  }

  // リセットボタンのクリックイベント
  $('.reset-btn').click(function () {
    $('#search-input').val('');
    $('.lists').html('');
  });
};












