/*
import { getRandomNumber } from '@/utils';


*/
// ⭐⭐⭐ LÀM LẠI 2 ⭐⭐⭐ //
console.log("⭐⭐⭐ 💔THUC HANH 2💔 ⭐⭐⭐");

// ⭐ Bài Thực hành:
// Vận dụng tất cả kiến thức đã học - Tạo hàm:

// 1.🔴 Tính chu vi, diện tích hình vuông. Cạnh hình vuông (a) là số nguyên 🚩

const a = 6;

const circumferenceCalculation = (a) => {
  const obj = {};

  if (isNaN(a) || a === Infinity) {
    return "Không phải số nguyên";
  }

  obj.perimeter = `${a * 4}m`;
  obj.acreage = `${a * a}m2`;

  return obj;
};

const result = circumferenceCalculation(a);
// console.log(result);

// 2.🔴 Nhận 2 tham số: Tham số thứ 1 là a, Tham số thứ 2 là b; Hàm này dùng để giải phương trình bậc nhất một ẩn 🚩

const b = 5;
const c = 25;
const d = 10;

/*
3 * x + 5 = 20
3 * x = 20 - 5
x = (20 - 5) / 3
x = (d - b) / a
*/

const firstDegreeEquation = (a, b, c) => {
  let experience = 0;

  if (a === 0 && b !== 0) {
    return " Phương trình vô nghiệm";
  } else if (b === 0 && c === 0) {
    return "Phương trình có vô số nghiệm";
  } else if (a !== 0) {
    return `Phương trình có nghiệm là: x = ${(c - b) / a}`;
  }

  return experience;
};

const result1 = firstDegreeEquation(b, c, d);
// console.log(result1);

// ⭐ Bài 54. Thực hành tạo các loại hàm:
/*
Tạo 2 hàm declarationFunction và expressionFunction thỏa mãn các yêu cầu sau đây:
declarationFunction là 1 declaration function
expressionFunction là 1 expression function
*/

function run() {}
const run1 = () => {};

// ⭐ Bài 56. Thực hành với chuỗi 1:
// Cho trước một biến email, hãy gán giá trị cho nó là một chuỗi.

const email = "email";

// ⭐ Bài 58. Thực hành với chuỗi 2:
// Cho trước chuỗi courses chứa tên các khóa học cách nhau bởi dấu ,.
// Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

const courses = "Java, Ruby, Python";

const strToArray = (str) => {
  const array = str.split();
  return array;
};

const result58 = strToArray(courses);
// console.log(result58);

// ⭐ Bài 59. Hàm lấy độ dài chuỗi:
// Hãy tạo 1 Hàm trả về độ dài của tham số content.

const str = "Thu Trang, Hạ Trang, Xuân Bảo";

const lengthStr = (content) => {
  return content.length;
};

const result59 = lengthStr(str);
// console.log(result59);

// ⭐ Bài 60. Chuyển đổi sang chữ in hoa:
// Hãy tạo hàm getUpperCaseName có 1 tham số là name, hàm này sẽ trả về phiên bản chữ viết hoa của giá trị mà nó nhận được từ name.

const getUpperCaseName = (name) => {
  return name.toUpperCase();
};

const result60 = getUpperCaseName(str);
// console.log(result60);

// ⭐ Bài 63. Tạo một biến mang giá trị số:
// Hãy khai báo biến year và gán cho nó một giá trị số nguyên.

const year = 2024;

// ⭐ Bài 64. Viết hàm kiểm tra kiểu number 1:
/*
Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
Hàm isNumber có 1 tham số, hãy đặt tên nó là value
Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
*/

function isNumber(value) {
  if (typeof value === "number") {
    return true;
  }
  return false;
}
// console.log(isNumber(year));

// ⭐ Bài 65. Viết hàm kiểm tra kiểu number 2:
// Viết hàm kiểm tra kiểu number của một giá trị nhận vào (Khắc phục các tồn tại của hàm isNumber trên ⭐ Bài 64)

const isNumber2 = (num) => {
  let isNumber = true;

  if (isNaN(num) || num === Infinity || !(typeof num === "number")) {
    isNumber = false;
  } else if (typeof value === "number") {
    isNumber = true;
  }

  return isNumber;
};

const result65 = isNumber2(NaN);
// console.log(result65);

// ⭐ Bài 67. Thực hành tạo array 1:
// Tạo biến myFamily với giá trị là 1 array, các phần tử là tên của các Thành viên gia đình bạn:

const myFamily = ["Thu Trang", "Xuân Bảo", "Thanh Hòa"];

// ⭐ Bài 70. Làm việc với mảng 1:
// Hàm joinWithCharacter có 2 tham số là array và charactor, hãy viết nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.

const str70 = "Nguyễn";

const joinWithCharacter = (array, charactor) => {
  let str = "";

  const arrToStr = array.join(" ");
  str = `${charactor} ${arrToStr}`;

  return str;
};

const result70 = joinWithCharacter(myFamily, str70);
// console.log(result70);

// ⭐ Bài 71. Làm việc với mảng 2:
// Hãy tạo hàm getLastElement có 1 tham số (Gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.

const getLastElement = (array) => {
  return array.pop();
};

const result71 = getLastElement(myFamily);
// console.log(result71);

// ⭐ Bài 74. Tạo object student:
// Tạo biến student và gán cho nó 1 object, object này có 3 keys để thể hiện tên, tuổi và địa chỉ của sinh viên. Các keys có tên là name, age và address.

const student = {
  name: "Thu Trang",
  age: 23,
  address: "Japan",
};

// console.log(student);

// ⭐ Bài 76. Tạo object constructor Animal:
/*
Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.
Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.
*/

const Animal = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
};

const cat = new Animal("mèo", 4, "15km/h");
// console.log(cat);

// ⭐ Bài 78. Thêm phương thức getFullName:
// Hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.

const Student = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
};

const student1 = new Student("Hạ", "Trang");
// console.log(student1.getFullName());

// ⭐ Bài 80. Hoàn thiện hàm getNextYear:
// Tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.

const date = new Date();

const getNextYear = (nextYear) => {
  return nextYear.getFullYear() + 1;
};

const result80 = getNextYear(date);
// console.log(result80);

// ⭐ Bài 82. Lấy ngẫu nhiên phần tử của mảng:
// Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và:
// 1. Hàm sẽ trả về ngẫu nhiên 1 phần tử của mảng, tại các chỉ mục lớn hơn 5.
// 2. Hàm sẽ trả về ngẫu nhiên 1 phần tử của mảng, tại các chỉ mục chẵn.

const number = ["a1", "a2", "a3", "a4", "b5", "c6", "d7", "e8", "f9", "g10", "a11", "a12", "a13", "a14", "b15"];

const getRandomItem1 = (number) => {
  const newArr = number.slice(5);
  const random = Math.ceil(Math.random() * newArr.length - 1);

  return newArr[random];
};

const result82 = getRandomItem1(number);
// console.log(result82);

const getRandomItem2 = (num) => {
  const random = Math.floor((Math.random() * (num.length - 1)) / 2) * 2;

  return num[random];
};

const result821 = getRandomItem2(number);
// console.log(result821);

// ⭐ Bài 84. Thử thách khó, dùng If/else:
// Tạo hàm với tham số a và đáp ứng các yêu cầu sau:
/* Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 4 thì return về 2
Khi a chia hết cho 7 thì return về 3 */

const e = 9;

const getDivisible = (a) => {
  if (a % 7 === 0) {
    return 3;
  } else if (a % 4 === 0) {
    return 2;
  } else if (a % 3 === 0) {
    return 1;
  }
};

const result84 = getDivisible(e);
// console.log(result84);

// ⭐ Bài 86. Hoàn thành code còn thiếu 1 :
/* Tạo hàm và sử dụng switch case để biểu diễn các thứ trong tuần */

const dayOnWeek = 6;

const week = (day) => {
  let dd;
  switch (day) {
    case 2:
      dd = day;
      break;
    case 3:
      dd = day;
      break;
    case 4:
      dd = day;
      break;
    case 5:
      dd = day;
      break;
    default:
      dd = "";
      break;
  }

  return dd === "" ? "I don't know!" : `Hôm nay là thứ ${dd} `;
};

const result86 = week(dayOnWeek);
// console.log(result86);

// ⭐ Bài 89. Hàm kiểm tra đủ tuổi bỏ phiếu:
// Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.

const getCanVoteMessage = (age) => {
  return age >= 18 ? "Yes" : "No";
};

const result89 = getCanVoteMessage(18);
// console.log(result89);

// ⭐ Bài 92. Tạo danh sách số ngẫu nhiên:
/*
// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
// Hàm này sẽ trả về một mảng ⭐ gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max. Sử dụng toLocaleString("vi-VN"); // de-DE để convert kết quả sang định dạng số VN?
*/

const min = 100;
const max = 6000000000;
const arrLength = 25;

const getRandNumbers = (min, max, length) => {
  const arr = [];
  for (let index = 0; index < length; index++) {
    const value = Math.floor(Math.random() * (max - min) + min);
    arr.push(value.toLocaleString("vi-VN"));
  }

  return arr;
};

const result92 = getRandNumbers(min, max, arrLength);
// console.log(result92);

// ⭐ Bài 94. Tính tổng các phần tử là số của mảng:
// Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.

const number2 = [101, 230, 312, 456, 512, 116, 207, 258];

const getTotal = (arr) => {
  let result = 0;

  for (let index = 0; index < arr.length; index++) {
    result += arr[index];
  }

  return result.toLocaleString("vi-VN");
};

const result94 = getTotal(number2);
// console.log(result94);

// ⭐ Bài 96. Tính tổng giá trị đơn hàng:
/* Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng. Cho trước mảng orders là danh sách chứa các mặt hàng, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó. Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng. */

const myFamily1 = [
  {
    name: "Thu Trang",
    age: 23,
  },
  {
    name: "Hạ Trang",
    age: 15,
  },
  {
    name: "Xuân Bảo",
    age: 6,
  },
];

const getTotalAge = (age) => {
  let totalAge = 0;

  for (let index = 0; index < age.length; index++) {
    totalAge += age[index].age;
  }

  return totalAge;
};

const result96 = getTotalAge(myFamily1);
// console.log(result96);

// ⭐ Bài 98. Bài tập sử dụng for...in:
/*
Tạo một hàm nhận một tham số là Object
Hàm này trả ra một Array (Các phần tử của array chính là các thuộc tính của Object nhận được khi gọi hàm)
*/

const object = {
  name: "Hạ Trang",
  age: 15,
};

const objToArr = (obj) => {
  const arr = [];

  for (const key in obj) {
    if (key === "name") {
      arr.push(`Tên tôi là: ${obj[key]}`);
    } else if (key === "age") {
      arr.push(`Năm nay tôi: ${obj[key]} tuổi`);
    }
  }

  return arr;
};

const result98 = objToArr(object);
// console.log(result98);

// ⭐ Bài 107. Thực hành làm việc với mảng:
/* Tạo hàm getMostFavoriteSport có 1 tham số (Gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn học có điểm số yêu thích lớn hơn 5. Gợi ý: Sử dụng phương thức filter. */

const myFavorites = [
  {
    name: "Vẽ",
    like: 10,
  },

  {
    name: "Hát",
    like: 7,
  },

  {
    name: "Nhảy",
    like: 4,
  },
];

const callBack = (a1, a2) => {
  const element = a1.like > 5;

  return element;
};

const likeMost = (like) => {
  const favourite = like.filter(callBack);

  return favourite;
};

const result107 = likeMost(myFavorites);
// console.log(result107);

// ⭐ Bài 110. Thực hành sử dụng phương thức reduce 1:
// Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.

const total = (a2) => {
  const favourite = a2.reduce((b1, b2) => {
    return (b1 += b2.like);
  }, 0);
  return favourite;
};

const sumAge = total(myFavorites);
console.log(sumAge);
console.log(Array.prototype.concat.toString());

// ⭐ Bài :
// ⭐ Bài :
// ⭐ Bài :
// ⭐ Bài :
// ⭐ Bài :
