/*







https://www.youtube.com/watch?v=RnKSfe_eShQ&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=5
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const password = $("#password");
const power = $(".power-point");

password.oninput = (_event) => {
  let point = 0;
  let value = password.value;
  let widthPower = ["1%", "25%", "50%", "75%", "100%"];
  let bgrColor = ["#f24d4c", "#e87706", "#d3af0f", "#00ff56", "#45f6ff"];

  if (value) {
    let arrTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];

    arrTest.forEach((item) => {
      if (item.test(value)) {
        point++;
      }
    });
  }

  power.style.width = widthPower[point];
  power.style.backgroundColor = bgrColor[point];
};
