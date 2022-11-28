$(function () {
  //1. btnMenu 클릭 시 addClass

  //2. btnMenu가 서서히 사라짐

  //3. section에 클래스 on 추가

  //4. nav에 on 추가
  $(".btnMenu").on("click", function () {
    $(this).fadeOut();
    $("section").addClass("on");
    $("nav").addClass("on");
    return false;
  });

  // nav li 를 클릭하면

  // btnMenu가 서서히 보임

  // section과 nav에 클래스 제거

  // 인덱스 번호 구하기

  // section > div 클래스 제거

  // section > div 줌 인덱스 번호가 같은 곳에 클래스 on 추가

  $("nav li").on("click", function () {
    $(".btnMenu").fadeIn();
    $("section").removeClass("on");
    $("nav").removeClass("on");

    var i = $(this).index();
    $("section > div").removeClass("on");
    $("section > div").eq(i).addClass("on");
  });
});
