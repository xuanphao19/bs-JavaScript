/*







https://www.youtube.com/watch?v=MqKZYfhD7ME&list=PLe28tn1x4EIbxbFtXh7VeevcDlPuJlq1c&index=8
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const rangeInput = $$(".range-input input");
const rangeText = $$(".range-text div");
const progress = $(".progress");
const priceMax = rangeInput[0].max;
let piceGap = 5000;

rangeInput.forEach((item) => {
  item.addEventListener("input", (event) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < piceGap) {
      if (event.target.className === "range-min") {
        minVal = rangeInput[0].value = maxVal - piceGap;
      } else if (event.target.className === "range-max") {
        maxVal = rangeInput[1].value = minVal + piceGap;
      }
    }

    let positionMin = (minVal / priceMax) * 100;
    let positionMax = 100 - (maxVal / priceMax) * 100;

    progress.style.left = positionMin + "%";
    progress.style.right = positionMax + "%";

    rangeText[0].style.left = positionMin + "%";
    rangeText[1].style.right = positionMax + "%";

    rangeText[0].innerText = minVal.toLocaleString();
    rangeText[1].innerText = maxVal.toLocaleString();
  });
});
