$(function () {
  //1. btnMenu 클릭 시 addClass
  $(".btnMenu").on("click", function () {
    //2. btnMenu가 서서히 사라짐
    $(this).fadeOut();
    //3. section에 클래스 on 추가
    $("section").addClass("on");
    //4. nav에 on 추가
    $("nav").addClass("on");
    return false; //a로 감싸져있을 경우 a링크를 막는 역할
  });

  // nav li 를 클릭하면
  $("nav li").on("click", function () {
    // btnMenu가 서서히 보임
    $(".btnMenu").fadeIn();
    // section과 nav에 클래스 추가
    $("section").removeClass("on");
    $("nav").removeClass("on");

    // 인덱스 번호 구하기
    var i = $(this).index();
    // section > div 클래스 제거
    $("section > div").removeClass("on");
    // section > div 줌 인덱스 번호가 같은 곳에 클래스 on 추가
    $("section > div").eq(i).addClass("on");
  });
});
