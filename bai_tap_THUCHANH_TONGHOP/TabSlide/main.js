/*







*/
/*
https://www.youtube.com/watch?v=4CJHRdrfGtU&list=PLe28tn1x4EIZy7W5w82KoTcVFmqdgkJny&index=32

*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navtabs = $$(".slider-tabs");

navtabs.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-items")) {
      let lastActive = item.querySelector("li.active");
      let newActive = event.target;
      let bgActive = item.querySelector(".bg-active");

      lastActive.classList.remove("active");
      newActive.classList.add("active");
      bgActive.style.left = newActive.offsetLeft + "px";

      let lastContent = item.querySelector(".tab.active");
      let newContent = document.getElementById(newActive.dataset.target);

      lastContent.classList.remove("active");
      newContent.classList.add("active");
    }
  });
});
