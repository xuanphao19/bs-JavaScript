/*







https://www.youtube.com/watch?v=ZnFSFeVOsjg&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=7
*/

const $ = document.querySelector.bind(document);

const inner = $(".inner");

inner.addEventListener("mousemove", (event) => {
  document.documentElement.style.setProperty("--left-focus", event.x + "px");
  document.documentElement.style.setProperty("--top-focus", event.y + "px");
});
