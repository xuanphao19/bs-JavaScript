/*







https://www.youtube.com/watch?v=R36sxK0STUg&list=PLe28tn1x4EIa-CSr0p6y1ciWcRJfa2DiO
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const zoom = $(".zoom");
const imgZoom = $(".zoom img:last-child");

zoom.addEventListener("mousemove", (event) => {
  imgZoom.style.opacity = 1;

  let positionPx = event.x - zoom.getBoundingClientRect().left;
  let positionX = (positionPx / zoom.offsetWidth) * 100;
  imgZoom.style.setProperty("--zoom-x", positionX + "%");

  let positionPy = event.y - zoom.getBoundingClientRect().top;
  let positionY = (positionPy / zoom.offsetHeight) * 100;
  imgZoom.style.setProperty("--zoom-y", positionY + "%");

  let transformX = -(positionX - 50) / 3.5;
  let transformY = -(positionY - 50) / 3.5;
  imgZoom.style.transform = `scale(2) translateX(${transformX}%) translateY(${transformY}%)`;
});
zoom.addEventListener("mouseout", () => {
  imgZoom.style.opacity = 0;
});
