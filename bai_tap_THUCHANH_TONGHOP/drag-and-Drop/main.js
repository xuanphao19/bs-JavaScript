/*







https://www.youtube.com/watch?v=4nLFbCfRXUI&list=PLe28tn1x4EIYQa4JZJWJcvVD-oske28RQ&index=6
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let itemSrc = null;
const items = $$(".item");
const graphic = $(".graphic");

const drag = (event) => {
  itemSrc = event.target.src;
};

items.forEach((item) => {
  item.ondragstart = drag;
});

const drop = () => {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic").innerHTML = "";
  document.querySelector(".graphic").appendChild(img);
};

graphic.ondrop = () => drop();

const allowDrop = (event) => {
  event.preventDefault();
};
