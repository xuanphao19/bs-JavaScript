/*







*/
/*
https://www.youtube.com/watch?v=gaczhhm7vZA&list=PLe28tn1x4EIaNeqeXklFk2I4ZqjM1z5wh&index=6
*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listBtn = $$(".button button");
const lastReturn = $(".screen .last");
const newReturn = $(".screen .new");

let firstNum = null;
let newNum = null;
let calculator = null;

const reloadScreen = () => {
  lastReturn.innerText = firstNum ? firstNum + calculator : "";
  newReturn.innerText = newNum ? newNum : "";
  const newNumLength = Number(newNum).toString().length;
  changeFontSize(newNumLength);
};

const changeFontSize = (newNumLength) => {
  if (newNumLength > 3) {
    currentFontSize = Math.max(1, 2 - (newNumLength - 3) * 0.1);
  } else currentFontSize = 2;

  newReturn.style.fontSize = `${currentFontSize}em`;
};

listBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        newNum = newNum ? newNum + value : value;
        if (value !== "0") {
          newNum = Number(newNum);
        }
        if (newNum === "00") {
          newNum = "0";
        }

        break;

      case ".":
        if (Number(newNum) % 1 !== 0) return;

        if (newNum?.length <= 1) {
          newNum = "0.";
        } else if (Number.isInteger(newNum)) {
          newNum = newNum + value;
        }

        break;

      case "+-":
        newNum = -1 * newNum;
        break;

      case "%":
        newNum = 0.01 * newNum;
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (newNum) {
          if (firstNum) {
            applyCalculator();
          }
          calculator = ` ${value} `;
          firstNum = newNum;
          newNum = null;
        }
        if (newNum === null && !firstNum) {
          firstNum = "0";
          calculator = ` ${value} `;
        }
        break;

      case "=":
        applyCalculator();
        firstNum = null;
        break;

      case "AC":
        firstNum = null;
        newNum = null;
        calculator = null;
        break;
    }
    reloadScreen();
  });
});

const applyCalculator = () => {
  switch (calculator) {
    case " / ":
      newNum = firstNum / newNum;
      if (Number(newNum) % 1 !== 0) {
        newNum = newNum.toFixed(3);
      } else if (newNum === 0) {
        newNum = "0";
      }
      break;

    case " * ":
      newNum = firstNum * newNum;
      if (Number(newNum) % 1 !== 0) {
        newNum = newNum.toFixed(3);
      } else if (newNum === 0) {
        newNum = "0";
      }
      break;

    case " - ":
      newNum = firstNum - newNum;
      if (newNum === 0) newNum = "0";

      break;

    case " + ":
      newNum = Number(newNum) + Number(firstNum);
      if (newNum === 0) newNum = "0";

      break;

    default:
      break;
  }
};
