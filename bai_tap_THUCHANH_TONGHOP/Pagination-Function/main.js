/*







https://www.youtube.com/watch?v=yN-YjZVRhME&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=15
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let thisPage = 1;
let limit = 6;
const list = $$(".list .item");

const changePage = (i) => {
  thisPage = i;
  loadItem();
};

const listPage = () => {
  let count = Math.ceil(list.length / limit);

  let pages = $(".list-page");
  pages.innerHTML = "";

  if (thisPage !== 1) {
    let prev = document.createElement("li");
    prev.innerText = "HET";
    prev.onclick = () => {
      changePage(thisPage - 1);
    };
    pages.appendChild(prev);
  }

  for (let i = 0; i < count; i++) {
    let nextPage = document.createElement("li");
    nextPage.innerText = i;

    if (i === thisPage) {
      nextPage.classList.add("active");
    }

    nextPage.onclick = () => {
      changePage(i);
    };

    pages.appendChild(nextPage);
  }

  if (thisPage !== count) {
    let next = document.createElement("li");
    next.innerText = "HET";
    next.onclick = () => {
      changePage(thisPage + 1);
    };
    pages.appendChild(next);
  }
};

const loadItem = () => {
  let begin = limit * (thisPage - 1);
  let end = limit * thisPage - 1;

  list.forEach((item, key) => {
    if (key >= begin && key <= end) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  listPage();
};

loadItem();
