/*







https://www.youtube.com/watch?v=mLyAzJaf5UE&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=19
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const next = $("#next");
const prev = $("#prev");
const widthItem = $(".item").offsetWidth;

next.onclick = () => {
  $("#form-list").scrollLeft += widthItem;
};

prev.onclick = () => {
  $("#form-list").scrollLeft -= widthItem;
};
