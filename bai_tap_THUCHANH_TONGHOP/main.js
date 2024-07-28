/*








*/

console.log("💔---⭐ Bài tập Thực Hành Tổng Hợp: ⭐---💔");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const contents = $$(".tab-pane");

const line = $(".tabs .line");

line.setAttribute(
  "style",
  `left: ${$(".tab-item.active").offsetLeft}px;
  width: ${$(".tab-item.active").offsetWidth}px;`,
);

tabs.forEach((item, index) => {
  const content = contents[index];

  item.onclick = (event) => {
    $(".active").classList.remove("active");
    $(".active").classList.remove("active");

    event.currentTarget.classList.add("active");
    content.classList.add("active");

    line.setAttribute(
      "style",
      `left: ${$(".tab-item.active").offsetLeft}px; width: ${$(".tab-item.active").offsetWidth}px;`,
    );
  };
});

/* ======================== */
/* ====== General Practice ====== */
/* ======================== */

// Phần General Practice JavaScript: generalPractice

const lessonLinks = [
  {
    href: "./Accordion/accordion .html",
    title: "Tạo Đàn Accordion",
  },
  {
    href: "./Back-To-Top/index.html",
    title: "Back-To-Top Js",
  },
  {
    href: "./Form_validation/Form_validation.html",
    title: "Form Validation Js",
  },
  {
    href: "./HieuUngTuyetRoi/index.html",
    title: "Hieu Ung Tuyet Roi",
  },
  {
    href: "./Image-Slider/ImageSlider.html",
    title: "Image - Slider",
  },
  {
    href: "./Log-In/index.html",
    title: "Hieu Ung Log-In",
  },
  {
    href: "./Magnifying-Glass/index.html",
    title: "Magnifying Glass",
  },
  {
    href: "./MayTinhIOS/may-tinh.html",
    title: "May Tính IOS",
  },
  {
    href: "./music-player/Music_Player.html",
    title: "Music_Player",
  },
  {
    href: "./Password-Strength/index.html",
    title: "Password-Strength",
  },
  {
    href: "./Price-Range/index.html",
    title: "Price-Range",
  },
  {
    href: "./rating-stars/index.html",
    title: "rating-stars",
  },
  {
    href: "./TabSlide/TabSlide.html",
    title: "Tab Slide",
  },
  {
    href: "./TimeCountDown/timeCountDown.html",
    title: "Time Count Down",
  },
  {
    href: "./ToastMsg-2/Toast-Message.html",
    title: "ToastMsg-2",
  },
  {
    href: "./Toast-Message.html",
    title: "Toast-Message",
  },
  {
    href: "./Effect-Focus-Image/index.html",
    title: "Effect-Focus-Image",
  },
  {
    href: "./Right-Click-Effect/index.html",
    title: "Right-Click-Effect",
  },
  {
    href: "./Card-Hover/index.html",
    title: "Card-Hover",
  },
  {
    href: "./Card-Slide/index.html",
    title: "Card-Slide",
  },
  {
    href: "./CardSlide 2/index.html",
    title: "CardSlide 2",
  },
  {
    href: "./Right-Click-Effect/index.html",
    title: "Right-Click-Effect",
  },
  {
    href: "./Create-Product-Detail-Page/index.html",
    title: "Create-Product-Detail-Page",
  },
  {
    href: "./drag-and-Drop/index.html",
    title: "drag-and-Drop",
  },
  {
    href: "./loading-Effect/index.html",
    title: "loading-Effect",
  },
  {
    href: "./LogIn2/index.html",
    title: "LogIn2",
  },
  {
    href: "./Navigation-Menu-Indicator/index.html",
    title: "Navigation-Menu-Indicator",
  },
  {
    href: "./Pagination-Function/index.html",
    title: "Pagination-Function",
  },
  {
    href: ".",
    title: "Password-Strength",
  },
  {
    href: "./Right-Click-Effect/index.html",
    title: "Right-Click-Effect",
  },
  {
    href: "./Right-Click-Effect/index.html",
    title: "Right-Click-Effect",
  },
  {
    href: "./Right-Click-Effect/index.html",
    title: "Right-Click-Effect",
  },
];

const generalPractice = $(".general-practice");

const callBack = (link, i) => {
  const itemLink = document.createElement("a");
  itemLink.className = "nav-link";
  itemLink.setAttribute("role", "link");
  itemLink.href = link.href;
  itemLink.innerHTML = `<span class="text-danger">Bài ${i + 1}</span>: ${link.title}`;
  generalPractice.appendChild(itemLink);
};
const lessonMenu = lessonLinks.forEach(callBack);

/*
html css:
https://www.youtube.com/watch?v=r-gWdFSTDus&list=PLe28tn1x4EIa4b3MNasOQXkXDO8tkEaTN&index=3

https://www.youtube.com/watch?v=jXwFKQINzzA&list=PLe28tn1x4EIbsKfJmcHrRz8_WmjXTdKOp&index=7

https://www.youtube.com/watch?v=9iru1lvgd4w&list=PLe28tn1x4EIbsKfJmcHrRz8_WmjXTdKOp&index=8

https://www.youtube.com/watch?v=1Euq0y7cw_U&list=PLe28tn1x4EIbsKfJmcHrRz8_WmjXTdKOp&index=9

https://www.youtube.com/watch?v=Fv26gAffYiA&list=PLe28tn1x4EIbsKfJmcHrRz8_WmjXTdKOp&index=17

javascript:


https://www.youtube.com/watch?v=0zUgemUEKLA&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=2
// Xong

https://www.youtube.com/watch?v=gaczhhm7vZA&list=PLe28tn1x4EIaNeqeXklFk2I4ZqjM1z5wh&index=6
// Xong

https://www.youtube.com/watch?v=6XRmvSdTvMo&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=3
// Xong


https://www.youtube.com/watch?v=VcRuVYYH3SE&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=12
// Xong

https://www.youtube.com/watch?v=4CJHRdrfGtU&list=PLe28tn1x4EIZy7W5w82KoTcVFmqdgkJny&index=32
// Xong


https://www.youtube.com/watch?v=0S1Sc7Orr9w&list=PLe28tn1x4EIaNeqeXklFk2I4ZqjM1z5wh&index=7
// Xong

// Đàn accordion
https://www.youtube.com/watch?v=4nLFbCfRXUI&list=PLe28tn1x4EIYQa4JZJWJcvVD-oske28RQ&index=6
// Xong

// Back to top
https://www.youtube.com/watch?v=EtjGnYUTxKY&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=4
// Xong

// Kính lúp
https://www.youtube.com/watch?v=R36sxK0STUg&list=PLe28tn1x4EIa-CSr0p6y1ciWcRJfa2DiO
// Xong

// Kiểm tra password
https://www.youtube.com/watch?v=RnKSfe_eShQ&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=5
// Xong

// Đăng Nhập Bằng HTML CSS Và Javascript
https://www.youtube.com/watch?v=MqKZYfhD7ME&list=PLe28tn1x4EIbxbFtXh7VeevcDlPuJlq1c&index=8
// Xong

// Price Range Input
https://www.youtube.com/watch?v=YkoeL3mvVDc&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=6
// Xong

// Kính lúp nhòe
https://www.youtube.com/watch?v=ZnFSFeVOsjg&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=7
// Xong

// Hiệu ứng click chuột phải
https://www.youtube.com/watch?v=3_5g7whdbQk&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=11
// Xong

// Thiết kế kéo thả
https://www.youtube.com/watch?v=6va5tV1u0Po&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=12
// Xong

// Ẩn hiện mật khẩu 2
https://www.youtube.com/watch?v=TfWgkiXTwk8&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=14
// Xong

// Tạo hiệu ứng loading
https://www.youtube.com/watch?v=BQLQC-gnxNM&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=13
// Xong

// Card Slider
https://www.youtube.com/watch?v=mLyAzJaf5UE&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=19
// Xong

// Design Navigation Menu Indicator
https://www.youtube.com/watch?v=29jWRcanWKQ&list=PLe28tn1x4EIYQa4JZJWJcvVD-oske28RQ
// Xong

// Tạo chức năng phân trang
https://www.youtube.com/watch?v=yN-YjZVRhME&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=15
// Xong

// Tạo Trang Chi Tiết Sản Phẩm
https://www.youtube.com/watch?v=okyfcpZfPAU&list=PLe28tn1x4EIZy7W5w82KoTcVFmqdgkJny&index=6
// Xong

// Animation Card Slider 2
https://www.youtube.com/watch?v=Xh-wIMqohD0&list=PLe28tn1x4EIa4b3MNasOQXkXDO8tkEaTN&index=6
// Xong

// Card Hover 3D Effect
https://www.youtube.com/watch?v=eCMPoPcIyjs&list=PLe28tn1x4EIa4b3MNasOQXkXDO8tkEaTN
// Xong

// Create an Slider
https://www.youtube.com/watch?v=5FqDzIBaAP8&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=20

// How To Make Image Slider
https://www.youtube.com/watch?v=Y3s0_Vy6Uy0&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=21

// Animation slideshow
https://www.youtube.com/watch?v=z4TSbvm3hlo&list=PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc&index=23

// Tạo chức năng thêm giỏ hàng
https://www.youtube.com/watch?v=eDuXL1b6D2o&list=PLe28tn1x4EIYlb9cvanZ97XQ5xoQpwcZD&index=3

// Bộ lọc và tìm kiếm sản phẩm
https://www.youtube.com/watch?v=kNbDB1a0ZwA&list=PLe28tn1x4EIYlb9cvanZ97XQ5xoQpwcZD&index=6




// Hộp nhập thẻ tags
https://www.youtube.com/watch?v=pg7EPmvQJwU&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=8
// 🔴

// Kiểm tra kết nối mạng giống Facebook với Javascript
https://www.youtube.com/watch?v=zTMaaWkqi38&list=PLe28tn1x4EIb4_feu3SA-yFzmvzmyrIaU&index=10
// 🔴

// Tạo trò chơi Piano
https://www.youtube.com/watch?v=0TKP2tkUZ4Y&list=PLe28tn1x4EIZy7W5w82KoTcVFmqdgkJny&index=15
// 🔴

// Tạo hiệu ứng Animation Canvas
https://www.youtube.com/watch?v=WsRfMg8dlfw&list=PLe28tn1x4EIZy7W5w82KoTcVFmqdgkJny&index=42
*/
