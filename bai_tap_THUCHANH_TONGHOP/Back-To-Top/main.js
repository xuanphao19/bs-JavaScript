/*







https://www.youtube.com/watch?v=EtjGnYUTxKY&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=4
*/

console.log("💔---⭐ Bài tập Thực Hành Tổng Hợp: ⭐---💔");

const $ = document.querySelector.bind(document);

const toTop = $(".backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
