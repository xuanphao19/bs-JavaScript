/*







*/

/* https://www.youtube.com/watch?v=6XRmvSdTvMo&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=3 */

console.log("💔---⭐ Bài tập Thực Hành Tổng Hợp: ⭐---💔");

const $ = document.querySelector.bind(document);
const notifications = $(".notifications");
const success = $("#success");
const error = $("#error");
const warning = $("#warning");
const info = $("#info");
const showToast = (type, icons, title, text) => {
  const newToast = document.createElement("div");

  newToast.innerHTML = `
      <div class="toast ${type}">
        <i class="${icons}"></i>
        <div class="content">
          <div class="title">${title}</div>
          <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark"
        onclick= "(this.parentElement).remove()"
        ></i>
      </div>`;

  notifications.appendChild(newToast);

  newToast.timeOut = setTimeout(() => {
    newToast.remove();
  }, 6000);
};

success.onclick = () => {
  let type = "success";
  let icons = "fa-regular fa-circle-check";
  let title = "Success";
  let text = "Thành công 🌻🌻🌻";
  showToast(type, icons, title, text);
};

error.onclick = () => {
  let type = "error";
  let icons = "fa-solid fa-bomb";
  let title = "Error";
  let text = "Thất bại";
  showToast(type, icons, title, text);
};

warning.onclick = () => {
  const data = {
    type: "warning",
    icons: "fa-solid fa-triangle-exclamation",
    title: "Warning",
    text: "Cảnh báo lỗi",
  };
  showToast(data.type, data.icons, data.title, data.text);
};

info.onclick = () => {
  let type = "info";
  let icons = "fa-solid fa-circle-info";
  let title = "Info";
  let text = "hello";
  showToast(type, icons, title, text);
};
