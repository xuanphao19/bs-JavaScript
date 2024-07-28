/*







*/
// Khởi tạo bản đồ Hà Nội:
const maps = L.map("map").setView([21.0285, 105.8542], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(maps);

// Dữ liệu cho các marker (tọa độ và popup message)
const markers = [
  { lat: 21.0285, lng: 105.8542, message: "Hồ Hoàn Kiếm" },
  { lat: 21.0278, lng: 105.8342, message: "Lăng chủ tịch Hồ Chí Minh" },
  { lat: 21.0379, lng: 105.8342, message: "Chùa Một Cột" },
  { lat: 21.0242, lng: 105.841, message: "Ga Xe Lửa Hà Nội" },
  { lat: 21.0358, lng: 105.8486, message: "Hoàng thành Thăng Long" },
];

// Tạo icon tùy chỉnh
const customIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/xuanphao19/bs-JavaScript/main/assets/XuanPhao.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [6, -38],

  // Đường dẫn đến file shadow (nếu có)
  // shadowUrl: "https://example.com/path/to/your-icon-shadow.png",
  // shadowSize: [41, 41],
  // shadowAnchor: [12, 41],
});
// Thêm các marker vào bản đồ
const mapCity = markers.map((markerData) => {
  const mapPin = [markerData.lat, markerData.lng];
  const marker = L.marker(mapPin, { icon: customIcon }).addTo(maps).bindPopup(markerData.message);
  return { marker: marker, mapPin: mapPin };
});

// // Tạo marker target:
const targetMarker = L.marker([21.0358, 105.8486], { icon: customIcon }).addTo(maps).bindPopup("Nguyễn Pháo Thủ.");
targetMarker.openPopup();

const zoomCtrl = document.getElementById("zoomButton");
zoomCtrl.addEventListener("click", () => {
  maps.setView(mapCity[4].mapPin, 18);
  mapCity[4].marker.openPopup();
  // targetMarker.openPopup();
});

/* ============================= */

// 🟢🟢  DOM events in JavaScript ⭐⭐ ._latlng.lat

// DOM events là gì?
/*
DOM events (Document Object Model events) là các sự kiện xảy ra trong tài liệu web, và chúng cho phép JavaScript tương tác với HTML. DOM events có thể được kích hoạt bởi người dùng hoặc bởi trình duyệt, và chúng cung cấp một cách để làm cho các trang web trở nên động và tương tác hơn.

Dưới đây là một số DOM events phổ biến:

1. **Mouse Events**:
    - `click`: Xảy ra khi người dùng nhấn và thả nút chuột.
    - `dblclick`: Xảy ra khi người dùng nhấp đúp vào một phần tử.
    - `mousedown`: Xảy ra khi người dùng nhấn nút chuột.
    - `mouseup`: Xảy ra khi người dùng thả nút chuột.
    - `mousemove`: Xảy ra khi người dùng di chuyển chuột qua một phần tử.
    - `mouseover`: Xảy ra khi con trỏ chuột di chuyển vào một phần tử.

2. **Keyboard Events**:
    - `keydown`: Xảy ra khi người dùng nhấn một phím.
    - `keyup`: Xảy ra khi người dùng thả một phím.
    - `keypress`: Xảy ra khi người dùng nhấn một phím (không còn được khuyến nghị sử dụng, nên dùng `keydown` hoặc `keyup` thay thế).

3. **Form Events**:
    - `submit`: Xảy ra khi người dùng gửi một form.
    - `reset`: Xảy ra khi người dùng đặt lại một form.
    - `focus`: Xảy ra khi một phần tử nhận được focus.
    - `blur`: Xảy ra khi một phần tử mất focus.
    - `change`: Xảy ra khi giá trị của một phần tử form thay đổi.

4. **Window Events**:
    - `load`: Xảy ra khi toàn bộ trang và tất cả các tài nguyên của nó (như hình ảnh, script) đã tải xong.
    - `unload`: Xảy ra khi người dùng rời khỏi trang.
    - `resize`: Xảy ra khi kích thước cửa sổ trình duyệt thay đổi.
    - `scroll`: Xảy ra khi người dùng cuộn trang.

Để xử lý các DOM events, bạn có thể sử dụng các trình xử lý sự kiện (event handlers). Ví dụ:

```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

Trong ví dụ trên, khi người dùng nhấp vào nút với id `myButton`, một cảnh báo sẽ hiện lên với thông báo "Button clicked!".
*/
//⭐ Attr Event : Viết Event trực tiếp vào thẻ mở của thẻ HTML
// Ví du: <h1 "tên sự kiện (Bắt đầu bằng on...)" = "function (Thực hiện hành động nào đó)">Attr Event</h1>

//⭐ Add event ElementNode:
// ElementNode gọi đến phương thức addEventListener (
// Đối số thứ nhất: Tên sự kiện.
// Đối số thứ hai: function
//)

// elementNode.onclick = function () {};
// Không linh hoạt

// elementNode.addEventListener("click", (event) => {
//   event.target;
//   console.log(event.target);
// });

// ⭐ Làm việc với input title text

// const inputElement = document.querySelector(".name");
// console.log(inputElement);

// 🌻 Onchange from event :
// Khi value thay đổi(gọi hàm khi blur khỏi input)

// inputElement.onchange = (event) => {
//   const target = event.target; // === ElementNode
//   const value = target.value; // Giá trị của input element

//   console.log(value);
// };

// 🌻 Oninput from event :
// Khi value thay đổi(gọi hàm ngay lập tức)

// inputElement.oninput = (event) => {
//   const target = event.target; // === ElementNode
//   const value = target.value; // Giá trị của input element

//   console.log(value);
// };

// ⭐ Làm việc với input title checkbox

// const checkBox = document.querySelector(".checkbox");
// console.log(checkBox);

// checkBox.onchange = (event) => {
//   const target = event.target; // === ElementNode
//   const isChecked = target.checked; // Giá trị của input element

//   console.log(isChecked);
// };

// ⭐ Làm việc với select input

// const ctyList = document.querySelector(".ctyList");
// console.log(ctyList);

// ctyList.onchange = (event) => {
//   const target = event.target; // === ElementNode
//   const value = target.value;

//   console.log(value);
// };

// ⭐ PreventDefault and StopPropagation:

// 🌻 PreventDefault: // Ngăn chặn hành vi mặc định

/* const aElement = document.querySelectorAll(".link");

for (let i = 0; i < aElement.length; i++) {
  const element = aElement[i];
  element.onclick = (event) => {
    if (event.currentTarget.href.startsWith("https://chatgpt")) {
      event.preventDefault();
    }
  };
} */

/* const ulElement = document.querySelector("#nameList");

ulElement.onmousedown = (event) => {
  event.preventDefault();
};

ulElement.onclick = (event) => {
  console.log(event.target);
}; */

// 🌻 StopPropagation: // Ngăn chặn sự kiện lan truyền

/* const flower = document.querySelector(".flower");

flower.onclick = () => {
  console.log("Xin Chào 💕");
};

const btnCtrl = document.querySelector(".btn-ctrl");

btnCtrl.onclick = (event) => {
    event.stopPropagation();
  console.log("Ngày vui vẻ 😎😎");
}; */

// ⭐ Event Listeners : Lắng nghe sự kiện

const btn = document.querySelector(".btn-ctrl");
// console.log(btn);

// 🌻 Xử lý sự kiện với DOM Event

/* btn.onclick = () => {
  console.log("Việc 1");
  console.log("Việc 2");
  alert("Chào Mừng 😎😎");
};

setTimeout(() => {
  btn.onclick = () => {};
}, 3000); */

// 🌻 Xử lý sự kiện với Event Listeners

const alertMessage = () => {
  alert("Chào Hạ Trang 🌻🌻");
};

btn.addEventListener("click", alertMessage);

setTimeout(() => {
  btn.removeEventListener("click", alertMessage);
}, 300000);
