/*







https://www.youtube.com/watch?v=4nLFbCfRXUI&list=PLe28tn1x4EIYQa4JZJWJcvVD-oske28RQ&index=6
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const list = $$(".list .item");

list.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.classList.contains("active")) {
      if (event.target.closest(".dropdown")) {
        item.classList.remove("active");
      }
    } else {
      item.classList.add("active");
    }
  });
});
