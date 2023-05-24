// 検索ボタンのクリックイベント
let searchWord = ''; // 検索ワードを格納する変数
let pageCount = 1; // 現在のページ番号を格納する変数

// 検索ボタンのクリックイベント
$('.search-btn').on('click', function () {
  const newSearchWord = $('#search-input').val(); // 新しい検索ワードを取得
  if (newSearchWord !== searchWord) {
    searchWord = newSearchWord; // 検索ワードを更新
    pageCount = 1; // ページ番号をリセット
    performSearch(); // 検索を実行
    results = []; // 結果を初期化
  } else {
    nextPage(); // 同じ検索ワードの場合は次のページへ
  }
});

// ページ切り替えボタンのクリックイベント
$('.next-page-btn').on('click', function () {
  nextPage(); // 次のページへ
});

let results = []; // 検索結果を保持する配列

// 次のページを表示する関数
function nextPage() {
  pageCount++; // ページ番号をインクリメントして次のページへ
  performSearch(); // 検索を実行
}






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
    .fail(function (xhr, status, error) {
      displayError(xhr.status);
    });
}

// 検索結果を表示する関数
function displayResult(result) {
  $('.lists').empty(); // 検索結果をリセット
  const graph = result[0];
  if (graph.items && graph.items.length > 0) {
    const items = graph.items;
    for (let i = 0; i <items.length; i++) {
      const title = items[i].title;
      const author = items[i]["dc:creator"] || "作者不明";
      const itemUrl = items[i].link["@id"];
      const publisherName = items[i]["dc:publisher"];
      const listItem = `
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${title}</p>
              <p>作者：${author}</p>
              <p>出版社：${publisherName}</p>
              <a href="${itemUrl}" target="_blank">書籍情報</a>
            </div>
          </li>
        `;
        results.unshift(listItem); // 新しい結果をresults配列に追加
      }

      if (pageCount === 1) {
        $('.lists').html(results.join('')); // 初めてのページの場合は結果を表示
      } else {
        $('.lists').append(results.join('')); // 2ページ目以降は結果を追加
      }
      $('.search-btn').show(); // 次のページボタンを表示
    } else {
      if (pageCount === 1) {
        $('.lists').html(`<li>検索結果が見つかりませんでした。</li>`); // 初めてのページで結果が見つからない場合は表示
      } else {
        $('.search-btn').hide(); // 2ページ目以降で結果が見つからない場合は次のページボタンを非表示
      }
    }
  }




// エラーを表示する関数
function displayError(status) {
  let errorMessage = '';
  switch (status) {
    case 400:
      errorMessage = 'Bad Request';
      break;
    case 401:
      errorMessage = 'Unauthorized';
      break;
    case 404:
      errorMessage = 'Not Found';
      break;
    default:
      errorMessage = 'An error occurred';
      break;
  }
  $('.lists').html(`<li>Error: ${errorMessage}</li>`);
}

// リセットボタンのクリックイベント
$('.reset-btn').click(function () {
  pageCount = 0; // ページ番号をリセット
  $('#search-input').val('');
  $('.lists').html('');
});


