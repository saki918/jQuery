$(function () {
  // 1 start
  // // 「#hide-btn」要素のclickイベントをつくってください
  // $("#hide-btn").click(function () {
  //   // ボタンをクリックした時、slideクラスの2番目の要素のみをフェードアウトさせる。
  //   $(".slide").eq(1).fadeOut();
  // });
  // 1 finish

  // 2 start
  // toggleChangeBtn関数を定義してください
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
      /* lengthを用いると、jQueryオブジェクトの要素の個数を取得できます。
          しかしインデックス番号は０から始まるのでここでは-1しないとエラーが発生する。
          例 スライド４枚の場合、インデックス番号は0,1,2,3 要素の個数は4つ
          if 文の条件をイコールにするには-1 */
    } else if (slideIndex == $(".slide").length-1) {
      $('.next-btn').hide();
    }
  }
  $('.index-btn').click(function () {
    // 各番号ごとに各画像を表示する
    // 「.active」要素からactiveクラスを取り除いてください
    $(".active").removeClass("active");

    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入してください
    var clickedIndex = $(".index-btn").index($(this));

    // eqの引数をclickedIndexに書き換えてください
    $('.slide').eq(clickedIndex).addClass('active');

    // // 1. 変数slideIndexに「.active」要素のインデックス番号を代入してください
    // var slideIndex = $(".slide").index($(".active"));

    // // 3. change-btn要素を表示してください
    // $(".change-btn").show();

    // // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    // if (slideIndex === 0) {
    //   $(".prev-btn").hide();
    // } else if (slideIndex === 3) {
    //   $(".next-btn").hide();
    // }
    // 上で定義した関数の呼び出し
    toggleChangeBtn();
  });

  $('.change-btn').click(function () {
    // 変数$displaySlideを定義してください
    var $displaySlide = $(".active");

    // 変数$displaySlideからactiveクラスを取り除いてください
    $displaySlide.removeClass("active");

    // ifとelseを用いて、$displaySlideの前もしくは次の要素に
    // activeクラスをつけてください
    if ($(this).hasClass("next-btn")) {
      $displaySlide.next().addClass("active");
    } else {
      $displaySlide.prev().addClass("active");
    }

    // // 1. 変数slideIndexに「.active」要素のインデックス番号を代入してください
    // var slideIndex = $(".slide").index($(".active"));

    // // 3. change-btn要素を表示してください
    // $(".change-btn").show();

    // // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    // if (slideIndex === 0) {
    //   $(".prev-btn").hide();
    // } else if (slideIndex === 3) {
    //   $(".next-btn").hide();
    // }
    // 上で定義した関数の呼び出し
    toggleChangeBtn();
  });

});