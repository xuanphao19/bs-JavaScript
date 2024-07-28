/*







https://www.youtube.com/watch?v=pg7EPmvQJwU&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=8

*/

const $ = document.querySelector.bind(document);

const menu = $("#menu");
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.style.display = "block";
  menu.style.left = event.x - 20 + "px";
  menu.style.top = event.y + "px";
});

menu.addEventListener("mouseleave", (event) => {
  menu.style.display = "none";
});
