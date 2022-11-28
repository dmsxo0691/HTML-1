$(function () {
  $(".btn1").click(function () {
    $(".art1 ul li").removeClass("on");
    $(".art1 ul li:eq(0)").addClass("on");
    return false;
  });

  $(".btn2").click(function () {
    $(".art1 ul li").removeClass("on");
    $(".art1 ul li:eq(1)").addClass("on");
    return false;
  });
});
