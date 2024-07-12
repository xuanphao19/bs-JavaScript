// 1: Khai báo biến trong js
const fullName = "Nguyễn Hạ Trang";

// 2: Cú pháp comments

// 3: Các hàm có sẵn trong JavaScript
console.log(fullName);
console.warn(fullName);
console.error(fullName);
// setTimeout(() => {
//   alert("Hello");
// }, 1000);
// setInterval(() => {
//   alert("Hello");
// }, 100000);

// 4: Toán tử trong JavaScript
// số học
var a = 1;
a + 1;
a - 1;
a * 1;
a / 1;
a % 2;
a ** 1;

// toán tử gán
var b = 1;
b += 1;
b -= 1;
b *= 1;
b /= 1;
b %= 2;
b **= 1;

// toán tử so sánh
var c = 1;
var d = "2";
c < d;
c > d;
c <= d;
c >= d;
c == d;
c === d;
c != d;
c !== d;

// toán tử logical
var e = true;
var f = false;
e && f;
e || f;
!e;

// toán tử tăng giảm
var g = 1;
// tiền tố
++g;
--g;
//hậu tố
g++;
g--;

// toán tử 3 ngôi
const isArr = g > 0 ? "Yes" : "No";

// toán tử nối chuỗi
const myFullName = "Nguyễn" + "Hạ Trang";

// 5: Kiểu dữ liệu Boolean
const isBoolean = true; // or false

// 6: Câu lệnh điều kiện If
if (g < 0) {
  console.log("Đúng");
} else {
  console.log("Sai");
}

// 7: Các kiểu dữ liệu
// dữ liệu nguyên thủy
// số
const h = 345;

// chuỗi
const j = "234";

// null
const isNull = null;

// undefined
var age;

// boolean
const isBoolean1 = true; // or false

// dữ liệu phức tạp
function name(name) {}

// object
// object
const object = {
  name: "Hạ Trang",
  age: 15,
  getName: function () {
    return this.name;
  },
};

// array
const array1 = ["Hạ Trang", "Thu Trang", "Xuân Bảo"];
const family = [
  {
    id: "father",
    name: "Thanh Hòa",
    age: 49,
  },

  {
    id: "mother",
    name: "Phan Hiệp",
    age: 50,
  },

  {
    id: "sister",
    name: "Thu Trang",
    age: 23,
  },
];

// 8+9+10: Hàm+ Tham số+ Return trong Js

function myName(name) {
  console.log("Được thực thi");
  return name + 1; // Kết thúc việc thực thi hàm ngay lập tức
  console.log("Không được thực thi");
}
const thuTrang = myName("Thu Trang"); // Thu Trang1
const haTrang = myName("Hạ Trang");
const xuanPhao = myName("Xuân Pháo");
console.log(thuTrang, haTrang, xuanPhao);
const run = function (name) {
  console.log("Được thực thi");
  return name + 1; // Kết thúc việc thực thi hàm ngay lập tức
  console.log("Không được thực thi");
};
run(8);
console.log(run(8));
const my = run(867879);
console.log(my);

// 11+12+13+14: Làm việc với số, chuỗi, mảng, obj
// số
//mảng
// lấy phần tử theo index cho trước
const myArray = ["12343", "Thu Trang", "Xuân Bảo"];
/* console.log(myArray[2]);

console.log(myArray.length);

console.log(myArray.pop());

console.log(myArray.push(["Hello"]));

console.log(myArray.shift());

console.log(myArray.unshift(["hạ trang"])); */

// console.log(myArray.join());
// console.log(myArray.toString());

// console.log(myArray.slice(1, 0));

console.log(myArray.splice(1));

console.log(myArray.concat(family));

console.log([...family, ...myArray]);

// object

const myObject = {
  name: "Hạ Trang",
  age: 15,
  height: "1.68m",
};
