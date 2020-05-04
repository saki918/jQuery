$(function () {

  // 「.social-icon」にマウスが乗ったときに、そのfont-sizeを30pxに変更し、
  // 離れたときにはfont-sizeを24pxにしてください。
  $(".social-icon").hover(
    function () {
      $(this).animate({
        "font-size": "30px"
      }, 300)
    },
    function () {
      $(this).animate({
        "font-size": "24px"
      }, 300)
    }
  );

  // 「#top-btn」をクリックしたときに
  // ページ最上部まで自動でスクロールするようにしてください
  $("#top-btn").click(function () {
    // "scrollTop":0 で最上部までスクロール
    $("html,body").animate({"scrollTop":0},500);
  });

  // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。
  // id = #飛びたい先のid名 id = 飛びたい先のid名をHTMLで設定
  $("header a").click(function () {
    // 変数で飛びたい先のid名を取得
    var id = $(this).attr("href");
    // $(id)=$(#飛びたい先のid名)の斎場最上部からの距離を取得
    var position = $(id).offset().top;
    $("html,body").animate(
      // "scrollTop": position で飛びたい先のid名までスクロール
      { "scrollTop": position }, 500)
  });
});