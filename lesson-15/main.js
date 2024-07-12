//

// Xóa phần tử trùng lặp
var array = ["a", "b", "c", "a", "b", "c", "a", "b", "c"];
console.log([...new Set(array)]);
// Đặc tính của Set là unique
// Sử dụng toán tử giải (...) để (new Set(array)) trở thành array

// Functional proraming: lập trình hướng hàm

// Đệ quy là một hàm gọi lại chính nó
// Xác định định được điểm dừng
// Logic handle => tạo ra điểm dừng
function deQuy(num) {
  console.log(num);
  num--;
  if (num > 0) {
    return deQuy(num);
  }

  // if (num <= 0) {
  //   return;
  // }
  // deQuy(num);
}
deQuy(10);
// Trở thành vòng lập vô hạn
// => trả về lỗi

// VÍ DỤ ỨNG DỤNG ĐỆ QUY

// ví dụ về đếm ngược Recursive countDown
function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
}
countDown(10);

// custom loop Recursively the array
// ví dụ về vòng lặp

function customLoop(start, end, cb) {
  if (start < end) {
    cb(start);
    return customLoop(start + 1, end, cb);
  }
}

var array2 = ["Java", "JavaScript", "Ruby"];

customLoop(0, array2.length, function (index) {
  console.log("index", index);
  console.log(array2[index]);

  return array2[index];
});

// Tính giai thừa calculate factorial:
// ví dụ dùng vòng lặp:
function calcFactorial(num) {
  var output = 1;
  for (var p = num; p > 0; p--) {
    output = output * p;
  }
  return output;
}
console.log(calcFactorial(6));

// calculate factorial
// ví dụ dùng đệ quy:

function calculateFactorial(number) {
  if (number > 0) {
    return number * calculateFactorial(number - 1);
  }
  return 1;
}

console.log(calculateFactorial(3));

// Cách hứng giá trị của một hàm?
// Đệ quy? Muốn hiểu về Đệ quy cần hiểu về Callback, TTSS?
// Callback? Muốn hiểu về Callback thì cần phải hiểu về Hàm?
// ! Hàm::::
// + Định nghĩa ở đâu? Định nghĩa ntn?
// + Nhận bao nhiêu tham số? Tham số là (kiểu dữ liệu) gì?
// + Trả ra cái gì? Điều kiện (logic) để trả ra là gì? (có hay không).
// + Trả về ở đâu?
// + Gọi Hàm ở đâu? Điều kiện (logic) để hàm được gọi?
