$(function () {
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  });
});


$('#js-nav a[href]').on('click', function (event) {
  $('#js-hamburger').trigger('click');
});