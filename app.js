// Khởi tạo mảng đối tượng link bài học:
const lessonLinks = [
  { title: "Hiểu biết chung về Js" },
  { title: "Cú Pháp Comment trong Js" },
  { title: "Built-in functions JavaScript" },
  { title: "Toán Tử Trong JavaScript" },
  { title: "Kiểu dữ Liệu Boolean Trong JavaScript" },
  { title: "Câu Lệnh Điều Kiện If" },
  { title: "Các kiểu dữ liệu trong JavaScript" },
  { title: "Truthy và Falsy trong JavaScript" },
  { title: "Khái Niệm Về Hàm Function trong JavaScript" },
  { title: "Hiểu sâu về Tham số trong hàm" },
  { title: "Hiểu về từ khóa return trong hàm" },
  { title: "Làm việc với đối tượng Date && Math trong JavaScript" },
  { title: "Lệnh rẽ nhánh Switch." },
  { title: "Loops in JavaScript." },
  { title: "ĐỆ QUY: RECURSIVE in JavaScript." },
  { title: "Làm việc với Mảng phần hai." },
  { title: "⭐ CallBack in JavaScript ⭐" },
  { title: "⭐ HTML DOM ⭐" },
  { title: "DOM events in JavaScript 💔" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "Ôn tập Phần 1" },
  { name: "bai_tap_thuc_hanh", id: "baitap", title: "--- Bài tập thực hành: ---" },
  { name: "bai_tap_HTML_DOM", id: "baitapDOM", title: "---⭐ Bài tập HTML DOM: ⭐---" },
];

// Lấy phần tử (element) "lesson-JS" trong html
const lessonList = document.getElementById("lesson-JS");

// Duyệt qua mảng link bài học (lessonLinks)
const callBack = (link, i) => {
  // Tạo một thẻ <a> trong HTML
  const itemLink = document.createElement("a");

  // add thêm class vào thẻ <a> vừa tạo ra.
  itemLink.className = "nav-link";
  itemLink.setAttribute("role", "link");

  // Thêm thuộc tính href cho thẻ <a>
  itemLink.href = `./${link.name ? link.name : `lesson-${i + 1}`}/${link.id ? link.id : `bai${i + 1}`}.html`;

  // Thêm nội dung hiển thị vào content của thẻ <a> (3 cách)
  // itemLink.textContent = `Bài ${i + 1}: ${link.title}`;
  // itemLink.innerText = `Bài ${i + 1}: ${link.title}`;
  itemLink.innerHTML = `<span class="text-danger">Bài ${i + 1}</span>:
  ${link.title ? link.title : "Đang cập nhật nội dung!"}`;

  // append thẻ <a> vào làm con của phần tử lessonList
  lessonList.appendChild(itemLink);
};
const lessonMenu = lessonLinks.forEach(callBack);

// Kiểm tra giá trị biến lessonMenu:
console.log(lessonMenu); // forEach luôn trả về undefined
