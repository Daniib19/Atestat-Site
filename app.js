let current_image = 0;
let current_color = "blue";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const max = 4;

function changeR1Color(color, change) {
  if (change) current_color = color;

  $("#r1_image").attr("src", `images/buy_${color}.png`);
}

function nextImage(x) {
  current_image += x;

  if (current_image > max) current_image = 0;
  else if (current_image < 0) current_image = max;

  $("#action_image").attr("src", `images/design/r1_Action${current_image}.jpg`);
}

document.querySelectorAll("#changer").forEach((item) => {
  item.addEventListener("click", (event) => {
    changeR1Color(item.dataset.color, true);
  });
});

document.querySelectorAll("#changer").forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    changeR1Color(item.dataset.color);
  });
});

document.querySelectorAll("#changer").forEach((item) => {
  item.addEventListener("mouseleave", (event) => {
    $("#r1_image").attr("src", `images/buy_${current_color}.png`);
  });
});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function () {
  $(".sliding-up").each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass("slide-up");
    } else {
      $(this).removeClass("slide-up");
    }
  });

  $(".sliding-up-long").each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass("slide-up-long");
    } else {
      $(this).removeClass("slide-up-long");
    }
  });
});

$(document).ready(async function () {
  $(".sliding-up").each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass("slide-up");
    } else {
      $(this).removeClass("slide-up");
    }
  });

  await delay(1200);

  $("#banner-price").removeClass("slide-in");
  $("#banner-price").addClass("slide-in");

  $("#title").removeClass("slide-up");
  $("#title").addClass("slide-up");
});
