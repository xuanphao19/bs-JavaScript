/*








*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const item = $$(".content");

item.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const positionPx = e.x - item.getBoundingClientRect().left;
    const positionX = (positionPx / item.offsetWidth) * 100;

    const positionPy = e.y - item.getBoundingClientRect().top;
    const positionY = (positionPy / item.offsetHeight) * 100;

    item.style.setProperty("--rX", 0.5 * (50 - positionY) + "deg");
    item.style.setProperty("--rY", 0.5 * (50 - positionX) + "deg");
  });

  item.addEventListener("mouseout", () => {
    item.style.setProperty("--rX", "0deg");
    item.style.setProperty("--rY", "0deg");
  });
});
