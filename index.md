<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="stylesheet" href="./stylesheet.css" />
  <script src="./script.js"></script>
</head>

<body>
  <header>
    <h1>ちゅうぃったぁー</h1>
  </header>
  <div class="main">
    <div class="form">
      ここにはつぶやきを入力してEnter!!!!!
      <form action="">
        <input type="text" id="input_form" onchange="addList()">
        <input type="button" value="リセット" onclick="deleteList()">
      </form>
    </div>
    <div class="container">
      <h2>ここにはツイートの一覧が表示されます</h2>
      <div class="contents" id="contents">
        <p>今日はおにぎりをたくさん食べた🍙<span>@_date_2022/05/02</span></p>
        <p>今日はおパスタをたくさん食べた🍝<span>@_date_2022/05/03</span></p>
        <p>今日は米粉パンをたくさん食べた🍞<span>@_date_2022/05/04</span></p>
        <p>今日はピザをたくさん食べた🍕<span>@_date_2022/05/05</span></p>
        <p>今日はらーめんをたくさん食べた🍜<span>@_date_2022/05/06</span></p>
          <span id="newTweetDescription">ここから追加されます↓</span>
          <ul id="frame">
          </ul>
      </div>
    </div>
  </div>  
  <footer>
    <p>いちばんした</p>  
  </footer>
</body>

</html>
