// BÀI 3: CÁC HÀM CÓ SẴN TRONG Js: Built-in functions!

var fullName = "NGUYỄN HẠ TRANG-15";

// Hàm alert bật lên thông báo:
alert("Thông báo: " + fullName);

// Hàm console.log hiện thông báo ở tab console
console.log("console.log: ", fullName);

// Hàm console.warn hiện cảnh báo
console.warn("cảnh báo", fullName);

// Hàm console.error hiện thông báo lỗi
console.error("thông báo lỗi", fullName);

// Hàm confirm bật lên hộp thoại xác nhận
confirm("HELLO" + fullName);

// Hàm prompt bật lên hộp thoại xác nhận kèm input:
prompt("Nhập Thông Tin");

// Hàm setTimeout sẻ chỉ chạy 1 lần
// Sau 1 khoảng thời gian chỉ định (1000 === 1s)

setTimeout(function () {
  alert("HELLO " + fullName);
}, 1000);

// Hàm setInterval sẻ chạy lặp lại liên tục
// Cứ sau (10000 === 10s) lại được gọi lại một lần
setInterval(function () {
  alert("CHÀO MỪNG BẠN TRỞ LẠI ");
}, 10000);
