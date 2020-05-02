$(function () {
  // fadeout 要素が徐々に薄くなって消えていく
  $('.img').fadeOut(9000);
  /* hideメソッドを用いて<h1>要素を最初から隠す()がnilの場合 
     秒数を指定するとslideup＋fadeOutの挙動を見せる。
     class id を指定している要素でも
     要素名を指定しているメソッドの影響を受ける。*/
  $('.class').hide(7000);
  // slideUpメソッドを用いて下から上に向かって要素を隠す
  $('.p').slideUp(7000);
  /* slideUpメソッドを用いて、「#title」の要素を隠してください id = "" で指定した場合 $("#id_name")*/
  $('#title1').slideUp(3000);
  /* fadeOutメソッドを用いて、「.lesson-item」の要素を隠してください class = "" で指定した場合 $(".class_name")*/
  $('.lesson-item').fadeOut(3000);
  // showメソッドを用いて、「#title」要素を表示してください
  $("#h1").show(4000);

  // fadeInメソッドを用いて、「#image」要素を表示してください
  $("#image").fadeIn(6000);
  // #hide-textをクリックした時に起こる処理
  $("#hide-text").click(function () {
    $("#text1").slideUp(1000);
  });

  $("#change-css").click(function () {
    $("#text2").css("color", "red");
    $("#text2").css("font-size", "50px");
  });

  // 「#change-text」要素に対するclickイベントを作成してください
  $("#change-text").click(function () {
    $("#text3").text("ようこそ、Progateへ");
  });

  // 「#change-html」要素に対するclickイベントを作成してください
  $("#change-html").click(function () {
    $("#text3").html('<a href="https://prog-8.com/">.htmlメソッドでリンクに変更</a>');
  });
  // clickした要素のみ処理を適用 this=list-item
  $(".list-item").click(function () {
    $(this).css("color", "red");
  });

  $('.btn').click(function () {
    // $('#title')を変数$titleに代入してください
    let $title = $("#title2");


    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);

    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    $('#text4').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(10000);
  });

  $('#find-method').click(function () {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
    // cssメソッドで文字の色をredに指定してください
    $("#wrapper").find("a").css("color", "red");
  });

  $('#children-method').click(function () {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
    // fadeOutメソッドで隠してください
    $("#wrapper").children("a").fadeOut();
  });

  $("#language-wrapper").hover(function () {
    $(".language-text").fadeIn();
    },
    function () {
      $(".language-text").fadeOut();
    }
  );
});