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
