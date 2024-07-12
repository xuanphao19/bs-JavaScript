// BÀI1 : KHÁI NIỆM KHAI BÁO BIẾN
var fullName = "NGUYỄN HẠ TRANG-15";
// alert(fullName);

var a1 = 12;
const a2 = { as: "12" };

a1 = 20;

// a2 = "123"; // Không thực hiện được với const
a2.as = 123;
a2.ab = 123456;

// Bài 42. Thực hành tạo hàm sum:
// Vượt qua thử thách này bằng cách tạo một hàm tên là sum.

function sum() {}

// Bài 43. Thực hành tạo hàm triple:
// Vượt qua thử thách này bằng cách tạo một hàm tên là triple.

function triple() {}

// Bài 45. Thực hành tạo hàm sum 2:
/*
Hãy tạo 1 hàm có tên là sum có 2 tham số:
Tham số thứ 1 là a
Tham số thứ 2 là b
*/

function sum(a, b) {}

// Bài 46. Thực hành tạo hàm triple 2:
// Hãy tạo 1 hàm có tên là triple có 1 tham số x.

function triple(x) {}

// Bài 48. Thực hành tạo hàm sum 3:
// Hoàn thành thử thách này bằng cách tạo hàm sum, hàm có 2 tham số a, b và trả về tổng của 2 tham số.
function triple(a, b) {
  return a + b;
}

// Bài 50. Thực hành tạo hàm triple 3:
// Hoàn thành thử thách này bằng cách tạo hàm triple, hàm có 1 tham số x và trả về giá trị gấp 3 lần x. Ví dụ, x = 3 thì hàm triple sẽ trả về 9.

function triple(x) {
  return x * 3;
}
// console.log(triple(2));

// Bài 51. Thực hành dùng hàm triple:
// Sử dụng hàm triple đã cho, hãy tạo biến result để lưu kết quả của 10 * 3.

function triple(x) {
  result = x * 10;
  return result;
}
// console.log(triple(3));

// Bài 54. Thực hành tạo các loại hàm:
/*
Tạo 2 hàm declarationFunction và expressionFunction thỏa mãn các yêu cầu sau đây:
declarationFunction là 1 declaration function
expressionFunction là 1 expression function
*/

function run() {}
const sum3 = () => {};

// Bài 56. Thực hành với chuỗi 1:
// Cho trước một biến email, hãy gán giá trị cho nó là một chuỗi.

const myName = "Hạ Trang";

// Bài 58. Thực hành với chuỗi 2:
// Cho trước chuỗi coursesStr chứa tên các khóa học cách nhau bởi dấu ,.
// Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

const courses = "Java, PHP, Ruby, Dart";
function strToArray(cou) {
  console.log(cou);
  return cou.split();
}
// console.log(strToArray(courses));

// Bài 59. Hàm lấy độ dài chuỗi:
// Để vượt qua thử thách này, bạn hãy hoàn thành hàm getContentLength. Hàm này sẽ trả về độ dài của tham số content.

function getContentLength(content) {
  return content.length;
}
// console.log(getContentLength(courses));

// Bài 60. Chuyển đổi sang chữ in hoa:
// Hãy tạo hàm getUpperCaseName có 1 tham số là name, hàm này sẽ trả về phiên bản chữ viết hoa của giá trị mà nó nhận được từ name.

function getUpperCaseName(name) {
  return name.toUpperCase();
}
const a = getUpperCaseName(courses);
// console.log(a);

// Bài 63. Tạo một biến mang giá trị số:
// Hãy khai báo biến year và gán cho nó một giá trị số nguyên.

const year = 2024;

// Bài 64. Viết hàm kiểm tra kiểu number 1:
/*
Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:
Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
Hàm isNumber có 1 tham số, hãy đặt tên nó là value
Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
*/

function isNumber(value) {
  const result = typeof value === "number";

  return typeof value === "number";
}

var isNum = isNumber(year);
// console.log(isNum);

// Bài 65. Viết hàm kiểm tra kiểu number 2:

function isNumber2(value) {
  if (isNaN(value) || !(typeof value === "number") || value === Infinity) {
    return false;
  } else if (typeof value === "number") {
    return true;
  }
}
var isNum2 = isNumber2(50 / "");

// console.log(isNum2);

// Bài 67. Thực hành tạo array 1:
// Tạo biến games với giá trị là 1 array, array này có ít nhất 3 phần tử là tên của các games mà bạn biết.

const myFamily = ["Thu Trang", "Hạ Trang"];

// Bài 68. Thực hành tạo array 2:
const num = [3, 4, 5];

// Bài 70. Làm việc với mảng 1:
// Cho trước hàm joinWithCharacter có 2 tham số là array và charactor, hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.

const array1 = ["Thu", "Trang"];
const charactor1 = "Nguyễn";

const joinWithCharacter = (array, charactor) => {
  const str1 = array1.join(" ");
  const fullName = `${charactor} ${str1}`;
  return fullName;
};
const fullNameSister = joinWithCharacter(array1, charactor1);
// console.log(fullNameSister);

// Bài 71. Làm việc với mảng 2:
// Để vượt qua thử thách này, hãy tạo hàm getLastElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.

const getLastElement = (element) => {
  const lastElement = element.pop();
  return lastElement;
};
const result12 = getLastElement(myFamily);
// console.log(result12);

// Bài 72. Làm việc với mảng 3:

const getFirstElement = (element) => {
  const lastElement = element.shift();
  return lastElement;
};
const result14 = getFirstElement(myFamily);
// console.log(result14);

// Bài 74. Tạo object student:
// Tạo biến student và gán cho nó 1 object, object này có 3 keys để thể hiện tên, tuổi và địa chỉ của sinh viên. Các keys có tên là name, age và address.

const student = {
  name: "Hạ Trang",
  age: 15,
  address: "Hà Nội",
};

// Bài 76. Tạo object constructor Animal:
/*
Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.
Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.
*/

const Animal = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
};
const parrot = new Animal("vẹt", 2, "20km/h");
// console.log(parrot);

//   ⭐ LÀM LẠI ⭐   //
// Bài 42. Thực hành tạo hàm sum:
// Tạo một hàm tên là sum.

function sum() {}

// Bài 43. Thực hành tạo hàm triple:
// Tạo một hàm tên là triple.

function triple() {}

// Bài 45. Thực hành tạo hàm sum 2:
/*
Hãy tạo 1 hàm có tên là sum có 2 tham số:
Tham số thứ 1 là a
Tham số thứ 2 là b
*/

function sum(a, b) {}

// Bài 46. Thực hành tạo hàm triple 2:
// Hãy tạo 1 hàm có tên là triple có 1 tham số x.

function triple(x) {}

// Bài 48. Thực hành tạo hàm sum 3:
// Hãy tạo hàm sum, hàm có 2 tham số a, b và trả về tổng của 2 tham số.
function triple(a, b) {
  return a + b;
}

// Bài 50. Thực hành tạo hàm triple 3:
// Hãy tạo hàm triple, hàm có 1 tham số x và trả về giá trị gấp 3 lần x. Ví dụ, x = 3 thì hàm triple sẽ trả về 9.

function triple(x) {
  return x * 3;
}

// Bài 51. Thực hành dùng hàm triple:
// Sử dụng hàm triple đã cho, hãy tạo biến result để lưu kết quả của 10 * 3. 😡

function triple(x) {
  result = x * 10;
  return result;
}

// Bài 54. Thực hành tạo các loại hàm:
/*
Tạo 2 hàm declarationFunction và expressionFunction thỏa mãn các yêu cầu sau đây:
declarationFunction là 1 declaration function
expressionFunction là 1 expression function 🚩
*/

function run() {}
const sum4 = () => {};

// Bài 56. Thực hành với chuỗi 1:
// Cho trước một biến email🚩, hãy gán giá trị cho nó là một chuỗi.

const myName2 = "🚩Hạ Trang";

// Bài 58. Thực hành với chuỗi 2:
// Cho trước chuỗi courses🚩Str chứa tên các khóa học cách nhau bởi dấu ,.
// Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

const courses1 = "Java, PHP, Ruby, Dart";
function strToArray(cou) {
  console.log(cou);
  return cou.split();
}

// Bài 59. Hàm lấy độ dài chuỗi:
// Hãy tạo 1 Hàm trả về độ dài của tham số content.

function getContentLength(content) {
  return content.length;
}

// Bài 60. Chuyển đổi sang chữ in hoa:
// Hãy tạo hàm getUpperCaseName có 1 tham số là name, hàm này sẽ trả về phiên bản chữ viết hoa của giá trị mà nó nhận được từ name.

function getUpperCaseName(name) {
  return name.toUpperCase();
}
const d = getUpperCaseName(courses);

// Bài 63. Tạo một biến mang giá trị số:
// Hãy khai báo biến year và gán cho nó một giá trị số nguyên.

const year20 = 2024;

// Bài 64. Viết hàm kiểm tra kiểu number 1:
/*
Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:
Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
Hàm isNumber có 1 tham số, hãy đặt tên nó là value
Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
*/

function isNumber(value) {
  const result = typeof value === "number";

  return typeof value === "number"; // 😡
}

var isNum = isNumber(year);

// Bài 65. Viết hàm kiểm tra kiểu number 2: 🚩

function isNumber2(value) {
  if (isNaN(value) || !(typeof value === "number") || value === Infinity) {
    return false;
  } else if (typeof value === "number") {
    return true;
  }
}
var isNum2 = isNumber2(50 / "");

// Bài 67. Thực hành tạo array 1:
// Tạo biến games với giá trị là 1 array, array này có ít nhất 3 phần tử là tên của các games mà bạn biết.

const myFamily1 = ["Thu Trang", "Hạ Trang"];

// Bài 68. Thực hành tạo array 2:
const number = [3, 4, 5];

// Bài 70. Làm việc với mảng 1:
// Cho trước hàm joinWithCharacter có 2 tham số là array và charactor, hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.

const array12 = ["Hạ", "Trang"];
const array102 = ["Pháo", "Chíp", "Cún"];
const charactor12 = "Nguyễn";

const joinWithCharacter1 = (array, charactor) => {
  const str1 = array12.join(" "); // 🔴
  const fullName = `${charactor} ${str1}`;
  return fullName;
};
// Thêm yêu cầu mới:
const fullMyName3 = joinWithCharacter1(array102, charactor12);
// Trả ra: "Nguyễn Thu Trang, Nguyễn Hạ Trang, Nguyễn Xuân Pháo" 🔴

const fullMyName = joinWithCharacter1(array12, charactor12);

// Bài 71. Làm việc với mảng 2:
// Hãy tạo hàm getLastElement có 1 tham số (Gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.

const getLastElement1 = (element) => {
  const lastElement = element.pop();
  return lastElement;
};
const result123 = getLastElement1(myFamily);
// console.log(result123);

// Bài 72. Làm việc với mảng 3:
const getFirstElement1 = (element) => {
  const lastElement = element.shift();
  return lastElement;
};
const result101 = getFirstElement1(myFamily);

// Bài 74. Tạo object student:
// Tạo biến student và gán cho nó 1 object, object này có 3 keys để thể hiện tên, tuổi và địa chỉ của sinh viên. Các keys có tên là name, age và address.

const student1 = {
  name: "Hạ Trang",
  age: 15,
  address: "Hà Nội",
};

// Bài 76. Tạo object constructor Animal:
/*
Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.
Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.🚩
*/

const Animals = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.maxSpeed = speed;
};
const cat = new Animals("mèo", 4, "20km/h");

// Bài 78. Thêm phương thức getFullName:
// Hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.

const Student = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // Thêm yêu cầu mới: 🔴
  // Dùng phương pháp khác (Không dùng backtick!)
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};
var student18 = new Student("Trang", "Chíp");

// console.log(student18.firstName);
// console.log(student18.lastName);
// console.log(student18.getFullName());

// Bài 80. Hoàn thiện hàm getNextYear:
// Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.

const date = new Date();
const getNextYear = () => {
  const year = date.getFullYear() + 1;
  return year;
};
// console.log(getNextYear());

// Bài 82. Lấy ngẫu nhiên phần tử của mảng:
// Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.

const getRandomItem = () => {
  const random = Math.floor(Math.random() * 7); // 7 🔴 ???
  const bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin", "60 coin", "70 coin"];
  return bonus[random];
};

// console.log(getRandomItem());

// Bài 84. Thử thách khó, dùng If/else:
// Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:
/* Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 5 thì return về 2
Khi a chia hết cho 15 thì return về 3 */

const num1 = 12;
function run(a) {
  const num = a % 15 === 0 ? 3 : a % 5 === 0 ? 2 : a % 3 === 0 && 1;

  return num;
}
console.log(run(num1));

// Bài
// Bài
// Bài
