/*







https://www.youtube.com/watch?v=Xh-wIMqohD0&list=PLe28tn1x4EIa4b3MNasOQXkXDO8tkEaTN&index=6
*/

console.log("💔---⭐ Bài tập Thực Hành Tổng Hợp: ⭐---💔");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".slider .item");
const next = $("#next");
const prev = $("#prev");

let active = 3;

const loafShow = () => {
  let stt = 0;

  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  for (let i = active + 1; i < items.length; i++) {
    stt++;

    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
};
loafShow();

next.onclick = () => {
  active = active + 1 < items.length ? active + 1 : active;
  loafShow();
};

prev.onclick = () => {
  active = active - 1 >= 0 ? active - 1 : active;
  loafShow();
};
