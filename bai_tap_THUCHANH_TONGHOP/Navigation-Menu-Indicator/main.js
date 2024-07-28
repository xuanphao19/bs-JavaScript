/*







https://www.youtube.com/watch?v=29jWRcanWKQ&list=PLe28tn1x4EIYQa4JZJWJcvVD-oske28RQ
*/

console.log("💔---⭐ Bài tập Thực Hành Tổng Hợp: ⭐---💔");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".icon");

items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((item_del) => {
      item_del.classList.remove("active");
    });

    this.classList.add("active");
  });
});
