$(document).ready(function () {
  $(".detail-btn").click(function () {
    // Ẩn tất cả các phần div có class là "price-detail-showing"
    $(".price-detail-showing").hide();
    // Tìm phần div "price-detail-showing" tương ứng với nút đã nhấp
    var index = $(this).closest(".col-md-4").index();
    $(".price-detail-showing:eq(" + index + ")").slideToggle("slow");
  });
  $(".click-question").click(function () {
    if (
      $(this).closest(".question-row").find(".the-answer").is(":hidden") == true
    ) {
      $(this).closest(".question-row").find(".the-answer").slideDown("slow");
      $(this)
        .closest(".question-row")
        .find(".openclose img")
        .attr(
          "src",
          "https://easyhrm.vn/wp-content/uploads/2023/08/tabler_caret-down-filled.png"
        );
    } else {
      $(this).closest(".question-row").find(".the-answer").slideUp("slow");
      $(this)
        .closest(".question-row")
        .find(".openclose img")
        .attr(
          "src",
          "https://easyhrm.vn/wp-content/uploads/2023/08/tabler_caret-down-filled-1.png"
        );
    }
  });
  $(".openclose").click(function () {
    if (
      $(this).closest(".question-row").find(".the-answer").is(":hidden") == true
    ) {
      $(this).closest(".question-row").find(".the-answer").slideDown("slow");
      $(this)
        .closest(".question-row")
        .find(".openclose img")
        .attr(
          "src",
          "https://easyhrm.vn/wp-content/uploads/2023/08/tabler_caret-down-filled.png"
        );
    } else {
      $(this).closest(".question-row").find(".the-answer").slideUp("slow");
      $(this)
        .closest(".question-row")
        .find(".openclose img")
        .attr(
          "src",
          "https://easyhrm.vn/wp-content/uploads/2023/08/tabler_caret-down-filled-1.png"
        );
    }
  });
});

function scrollMouse(classFirst, nameClassAdd) {
  $(classFirst).addClass("hidden");
  $(classFirst).each(function () {
    var spaceTop = $(this).offset().top;
    var chieucao = $(this).height();
    var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
    var scrollBottom =
      $(document).height() + $(window).height() - $(window).scrollTop();
    var scrollSpaceTop = $(window).scrollTop();
    if (
      spaceBottom < scrollBottom - $(window).height() &&
      spaceTop < scrollSpaceTop + $(window).height()
    ) {
      $(this).addClass(nameClassAdd);
    } else {
      $(this).removeClass(nameClassAdd);
    }
  });
}
function scrollMouse1(classFirst, nameClassAdd) {
  $(classFirst).addClass("hidden");
  $(classFirst).each(function () {
    var spaceTop = $(this).offset().top;
    var chieucao = $(this).height();
    var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
    var scrollBottom =
      $(document).height() + $(window).height() - $(window).scrollTop();
    var scrollSpaceTop = $(window).scrollTop();
    if (
      spaceBottom < scrollBottom - $(window).height() &&
      spaceTop < scrollSpaceTop + $(window).height()
    ) {
      $(this).addClass(nameClassAdd);
    }
  });
}
var width = $(window).width();
if (width > 767) {
  $(window).scroll(function () {
    scrollMouse1(".featured-box", "zoomIn");
    scrollMouse1(".animation_img_right", "slide-right");
    scrollMouse1(".animation_img_left", "slide-left");
  });

}
