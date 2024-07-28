/*







https://www.youtube.com/watch?v=BQLQC-gnxNM&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=13
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let count = 0;
const loading = $("#loading");
const valueShow = $("#value-show");

loading.onclick = () => {
  if (count !== 0) return;

  count = 0;
  startLoading();
};

const startLoading = () => {
  if (count === 100) {
    valueShow.innerHTML = "FINISH 😎";
    count = 0;
  } else {
    count++;
    valueShow.innerHTML = count + "%";

    loading.style.setProperty("--loading-value", count + "%");

    setTimeout(startLoading, 20);
  }
};
