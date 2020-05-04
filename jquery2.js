// jqueryの型
$(function () {
  // ログインボタンを押すとログインのモーダルを表示する。
  $("#login-show").click(function () {
    $("#login-modal").fadeIn();
  });

  // 「.signup-show」のclickイベントを作成してください
  $(".signup-show").click(function () {
    $("#signup-modal").fadeIn();
  });

  $(".close-modal").click(function () {
    $("#login-modal").fadeOut();
    $("#signup-modal").fadeOut();
  });
    // lessonにマウスをあてると文を表示 外すと消える。
    $(".lesson").hover(
      function () {
        //addClass,removeClassでクラス名など指定する時、#や.は記述しない。
        $(this).find('.text-contents').addClass('text-active');
      },
      function () {
        $(this).find('.text-contents').removeClass('text-active');
      }
    );
  
  // .faq-list-itemの下にあるanswerがあるかないかをif文で分けて
  $(".faq-list-item").click(
    function () {
      var $answer = $(this).find(".answer");
      if ($answer.hasClass("open")) {
        // 答えを表示している時の処理。class="open"を持っている場合
        $answer.removeClass("open");
        // slideUpメソッドを用いて、$answerを隠してください
        $answer.slideUp();

        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find("span").text("+");
      } else {
        // 答えを非表示にしている時の処理 class="open"を持っていない場合
        $answer.addClass("open");
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();

        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find("span").text("-");
      }
    }
  );
});