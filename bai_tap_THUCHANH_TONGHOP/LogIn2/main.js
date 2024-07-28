/*







https://www.youtube.com/watch?v=TfWgkiXTwk8&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=14
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const ctrl = $$(".ctrl");

const changeTypePass = () => {
  const password = $("#password");
  password.type = password.type === "text" ? "password" : "text";
};

ctrl.forEach((item) => {
  item.onclick = changeTypePass;
});
