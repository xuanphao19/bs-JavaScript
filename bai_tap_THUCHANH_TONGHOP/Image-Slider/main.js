/*







*/
/*
https://www.youtube.com/watch?v=VcRuVYYH3SE&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=12
*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const list = $(".slider .list");
const item = $$(".slider .list .item");
const dots = $$(".dots li");
const prev = $("#prev");
const next = $("#next");

let active = 0;
let lengthItem = item.length - 1;

next.onclick = () => {
  if (active + 1 > lengthItem) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};

prev.onclick = () => {
  if (active - 1 < 0) {
    active = lengthItem;
  } else {
    active = active - 1;
  }
  reloadSlider();
};

let refreshSlider = setInterval(() => {
  next.click();
}, 10000);

const reloadSlider = () => {
  let checkLeft = item[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActive = $(".slider .dots li.active");
  lastActive.classList.remove("active");

  dots[active].classList.add("active");

  clearInterval(refreshSlider);
  let refreshSlider = setInterval(() => {
    next.click();
  }, 3000);
};

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    active = index;
    reloadSlider();
  });
});
