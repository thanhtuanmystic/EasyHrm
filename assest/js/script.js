$(document).ready(function () {
  $(".detail-btn").click(function () {
    $(".price-detail-showing").hide();
    var index = $(this).closest(".col-md-4").index();
    $(".price-detail-showing:eq(" + index + ")").slideToggle("slow");
  });
  $(".showdetail-btn").click(function () {
    $(this).parent().find(".showdetail").addClass("minhight-500");
    $(this).parent().find(".showdetail").slideToggle();
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

  $(".avt-click").click(function () {
    var index2 = $(this).closest(".avt-click").index();
    index2 = index2 - 1;
    $(".customer-box").hide();
    if (index2 == 0 || (index2 == 1) | (index2 == 2)) {
      $(".customer-box:eq( 0 )").css("display", "block");
      $(".customer-box:eq( 1 )").css("display", "block");
      $(".customer-box:eq( 2 )").css("display", "block");
    }
    $(".customer-box:eq( 0 )").css("display", "block");
    $(".customer-box:eq( 1 )").css("display", "block");
    $(".customer-box:eq(" + index2 + ")").css("display", "block");
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
    scrollMouse1(".featured-box", "slide-right");
    scrollMouse1(".animation_img_right", "slide-right");
    scrollMouse1(".animation_img_left", "slide-left");
  });
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const count2000 = document.getElementById("count2000");
const count10 = document.getElementById("count10");
const count200000 = document.getElementById("count200000");
const count50 = document.getElementById("count50");
animateValue(count2000, 0, 2000, 2000);
animateValue(count10, 0, 10, 2000);
animateValue(count200000, 0, 200000, 2000);
animateValue(count50, 0, 50, 2000);

$(document).ready(function () {
  setTimeout(function () {
    $(count2000).html("2.000");
    $(count200000).html("200.000");
  }, 2000);
});
