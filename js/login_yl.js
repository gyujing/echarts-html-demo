// 登录页面
function loginBtn() {
  window.location.href='menu.html';
}

$(function () {
  var loginHeight=$('body').height();
  $('.loginBack').innerHeight(loginHeight-115);
  $(window).resize(function () {
    var loginHeight=$('body').height();
    $('.loginBack').innerHeight(loginHeight-115);
  });

  // 自动登录check
  $(".check").click(function(){
    $(".check").toggleClass("checked");
  });
// 底部二维码
  $('.botlogo').mouseover(function () {
    $('.bottom span.ewm').css({
      'display':'block'
    })
  });
  $('.botlogo').mouseout(function () {
    $('.bottom span.ewm').css({
      'display':'none'
    })
  });
});

