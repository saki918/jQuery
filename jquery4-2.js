$(function () {
  // 変数titleに、「#title」要素のテキストを取得し代入してください
  var title = $("#title").text();
  // 2つの変数を定義してください
  // 変数 idを定義し、attrメソッドを用いて、.section - content p要素（「.section - content」要素の中のpタグ）のid名を代入してください。
  var id = $(".section-content").find("p").attr("id");
  // 変数 hrefを定義し、attrメソッドを用いて、#link要素のhref属性の値を代入してください。
  var href = $("#link").attr("href");

  // textメソッドを用いて、「#title-text」要素のテキストを書き換えてください
  $("#title-text").text(title);
  // textメソッドを用いて、それぞれ表示してください
  $("#content-id").text(id);
  $("#link-href").text(href);

  // フォームのカリキュラム
  // 「#form」要素のsubmitイベントを作成してください
  $("#form").submit(function () {
    // 変数selectValueを定義してください。
    var selectValue = $("#select-form").val();
    var textValue = $("#text-form").val();

    // textValueが空のとき、エラー文を表示してください
    if (textValue == '') {
      $("#error-message").text("理由を記入してください");
    } else {
      // シングルクォーテーション2つでから文字列の作成
      $("#error-message").text('');
    }
    // 「#output-select」要素のテキストを変数selectValueの値で書き換えてください。
    $("#output-select").text(selectValue);
    $("#output-text").text(textValue);
    return false;
  });

  // 「.option-btn」要素のclickイベントをつくってください。
  $(".option-btn").click(function () {
    var optionText = $(this).text();
    // 変数clickedOptionに、クリックした要素のdata-optionの値を代入してください。
    var clickedOption = $(this).attr("data-option");

    $("#text-form").val(optionText + "が好きな理由は、")
    // 変数clickedOptionを用いて、「#select-form」の値を自動で入力してください。
    $("#select-form").val(clickedOption);
  });

});