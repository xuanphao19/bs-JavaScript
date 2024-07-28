/*








*/

console.log("💔---⭐ Bài tập Thực Hành Tổng Hợp: ⭐---💔");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const myFamilies = [
  {
    type: "success",
    title: "Nguyễn Thu Misa",
    msg: "Hello, c Cún 💕💕💕🌼🌼🌼",
    delay: 10000,
    duration: 650,
  },
  {
    type: "info",
    title: "Nguyễn Hạ Trang",
    msg: "🌻🌻🌻🌻🌻🌻🌻🌻🌻",
    delay: 5000,
    duration: 650,
  },
  {
    type: "warning",
    title: "Nguyễn Xuân CuChiPha",
    msg: "Chúc bạn may mắn lần sau 🌺🌺🌺",
    delay: 5000,
    duration: 650,
  },
  {
    type: "error",
    title: "Nguyễn Văn Bố",
    msg: "Chúc bạn may mắn lần sau 😡😡😡",
    delay: 5000,
    duration: 650,
  },
  {
    type: "danger",
    title: "Phan Thị Hiệp",
    msg: "Chúc bạn may mắn lần sau 😡😡😡",
    delay: 5000,
    duration: 650,
  },
];

const showMemberMyFamily = ({ type = "success", title = "", msg = "", delay = 5000, duration = 650 }) => {
  const main = $("#toast");

  if (main) {
    const toast = document.createElement("div");
    toast.className = `toast toast--${type}`;

    toast.setAttribute("style", `--delay: ${delay}ms; --duration: ${duration}ms`);

    const autoRemove = setTimeout(() => {
      main.removeChild(toast);
    }, delay + duration);

    toast.onclick = (event) => {
      if (event.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const icons = {
      success: "cunmisa",
      info: "HaTrang",
      warning: "XuanPhao",
      error: "Thanh-Hoa",
      danger: "HiepPhan",
    };

    toast.innerHTML = `
            <div class="toast__icon">
              <img class="avatar" src="../assets/images/${icons[type]}.jpg" alt="${icons[type]}">
            </div>
            <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
              <i class="fa-regular fa-circle-xmark"></i>
            </div>`;

    main.appendChild(toast);
  }
};

const btnToast = $(".btn--success");

if (btnToast) {
  let index = 0;
  btnToast.addEventListener("click", () => {
    showMemberMyFamily(myFamilies[index]);

    index = index < myFamilies.length - 1 ? index + 1 : 0;
  });
}
