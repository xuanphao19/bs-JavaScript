/*








https://www.youtube.com/watch?v=0S1Sc7Orr9w&list=PLe28tn1x4EIaNeqeXklFk2I4ZqjM1z5wh&index=7
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* const timeEnd = new Date("2024-07-24T12:00:00").getTime();

const countDown = (time) => {
  setInterval(() => {
    let now = new Date().getTime();
    let distance = timeEnd - now;

    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minuter = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    let second = Math.floor((distance % (60 * 1000)) / 1000);

    $("#day").innerText = day < 10 ? `0${day}` : day;
    $("#hour").innerText = hour < 10 ? `0${hour} :` : `${hour} :`;
    $("#minute").innerText = minuter < 10 ? `0${minuter} :` : `${minuter} :`;
    $("#second").innerText = second < 10 ? `0${second}` : second;
  }, 1000);
};

countDown(timeEnd); */

const countDown = (selector, timer) => {
  const container = $(selector);
  const element = document.createElement("div");
  element.className = "time";

  let dd, hh, mn, ss, limit;
  const timeEnd = new Date(timer).getTime();

  element.innerHTML = `
    <div class="item day"><span>00</span>Day</div>
    <div class="item hour"><span>00</span>Hour</div>
    <div class="item minute"><span>00</span>Minute</div>
    <div class="item second"><span>00</span>Second</div>`;

  container.appendChild(element);

  const countDownLoop = setInterval(() => {
    const now = new Date().getTime();
    limit = timeEnd - now;

    dd = Math.floor(limit / 86400000);
    hh = Math.floor((limit % 86400000) / 3600000);
    mn = Math.floor((limit % 3600000) / 60000);
    ss = Math.floor((limit % 60000) / 1000);

    if (limit <= 0) {
      dd = hh = mn = ss = 0;
      clearInterval(countDownLoop);
    }

    $(".day span").innerText = dd < 10 ? `0${dd}` : dd;
    $(".hour span").innerText = hh < 10 ? `0${hh}` : hh;
    $(".minute span").innerText = mn < 10 ? `0${mn}` : mn;
    $(".second span").innerText = ss < 10 ? `0${ss}` : ss;
  }, 1000);
};

countDown(".time-content", "2025-01-01T00:00:00");
