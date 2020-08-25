$(function () {
  let btn = $(".proceed_btn");
  let title = $(".section1_h1 span");
  let flash1 = $(".section2_h2");
  let flash2 = $(".section2_h22");
  let flash3 = $(".section2_h23");

  $(btn).css("visibility", "hidden");

  setTimeout(function () {
    $(btn).css("visibility", "visible");
    $(btn).removeClass("shadow-none");
    $(btn).addClass("glowing");
  }, 2000);

  $(btn)
    .on("mouseover", function () {
      $(this).css("transform", "rotate(5deg)");
    })
    .on("mouseleave", function () {
      $(this).css("transform", "rotate(0deg)");
    });

  $(btn).on("click", function () {
    $(flash1).addClass("flashAnimation");
    $(flash2).addClass("flashAnimation2");
    $(flash3).addClass("flashAnimation3");
    $(title).addClass("showAnimation");
    $(btn).css("visibility", "hidden");
  });

  $(title)
    .on("mouseover", function () {
      $(this).css(
        "text-shadow",
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 60px #0073e6, 0 0 70px #0073e6"
      );
    })
    .on("mouseout", function () {
      $(this).css("text-shadow", "none");
    });

  // mobile mouse events for title
});
