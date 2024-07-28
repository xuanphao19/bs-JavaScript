/*







https://www.youtube.com/watch?v=0zUgemUEKLA&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=2
*/
// Tuyết rơi: 🌻

const renderSnow = ((selector, totalSnow = 50) => {
  const container = document.querySelector(selector);
  for (let i = 0; i < totalSnow; i++) {
    const leftSnow = Math.floor(Math.random() * container.clientWidth);
    const topSnow = Math.floor(Math.random() * container.clientHeight);
    const snowSize = Math.floor(Math.random() * 40 + 10);
    const timeSnow = Math.floor(Math.random() * 5 + 5);
    let directionSnow = Math.floor(Math.random() * 150);
    if (directionSnow % 2 === 0) directionSnow = directionSnow * -1;

    const element = document.createElement("div");
    element.className = "snow";

    element.setAttribute("style", `--direction:${directionSnow}px; --rotate: ${leftSnow}deg;`);
    element.style.left = leftSnow + "px";
    element.style.top = topSnow + "px";
    element.style.width = snowSize + "px";
    element.style.height = snowSize + "px";
    element.style.animationDuration = timeSnow * 0.8 + "s";
    element.style.filter = `blur(${snowSize * 0.05}px)`;

    container.appendChild(element);
  }
})("#container", 200);
