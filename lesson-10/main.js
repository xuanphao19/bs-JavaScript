// Định nghĩa ra function

var b = 10 + 45;

function myAlert(tuoi = "Thu trang", ad = 151585515) {
  // console.log(b.length);
  if (tuoi === 5) {
    return true;
  } else {
    return false;
  }
}

// Tham số (Khi định nghĩa hàm) là một biến dể nhận GIÁ TRỊ của đối số KHI gọi hàm

ketQua = myAlert(5, b);
console.log("ketQua ::", ketQua);

var ketQua = myAlert(123, b);
console.log("ketQua ::", ketQua);

// Hàm và Kiến thức liên quan:

// Cách hứng giá trị của một hàm?
// Đệ quy? Muốn hiểu về Đệ quy cần hiểu về Callback, TTSS?
// Callback? Muốn hiểu về Callback thì cần phải hiểu về Hàm?
// ! Hàm::::
// + Định nghĩa ở đâu? Định nghĩa ntn?
// + Nhận bao nhiêu tham số? Tham số là (kiểu dữ liệu) gì?
// + Trả ra cái gì? Điều kiện (logic) để trả ra là gì? (có hay không).
// + Trả về ở đâu?
// + Gọi Hàm ở đâu? Điều kiện (logic) để hàm được gọi?
