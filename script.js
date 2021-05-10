// ハンバーガー
$(function () {
  $('.Toggle').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active');
        $('.NavMenu').fadeIn(500);
    } else {
        $('.NavMenu').removeClass('active');
        $('.NavMenu').fadeOut(500);
    }
  });

  $('.navmenu-a').click(function () {
    $('.NavMenu').removeClass('active');
    $('.NavMenu').fadeOut(1000);
    $('.Toggle').removeClass('active');
  });
});

// ABOUT
const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++){
  const targetElement = animationTargetElements[i],
        texts = targetElement.textContent, 
        textsArray = [];
  
  targetElement.textContent = "";

  for (let j = 0; j < texts.split("").length; j++){
    const t = texts.split("")[j]; 
    if (t === "") {
        textsArray.push("");
      } else {
        textsArray.push('<span style="animation-delay: ' + (j*0.3) + 's;">' + t + '</span>')
      }
  }

  for (let k = 0; k < textsArray.length; k++){
    targetElement.innerHTML += textsArray[k];
  }
}

// SKILL
var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
  
}
