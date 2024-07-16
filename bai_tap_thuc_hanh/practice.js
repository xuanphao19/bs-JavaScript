/*


*/

// ⭐⭐⭐ LÀM LẠI ⭐⭐⭐ //
console.log("⭐⭐⭐ 💔💔💔 ⭐⭐⭐");

// ⭐ Bài 42. Thực hành tạo hàm sum:
// Tạo một hàm tên là sum.

function sum() {}

// ⭐ Bài 43. Thực hành tạo hàm triple:
// Tạo một hàm tên là triple.

function triple() {}

// ⭐ Bài 45. Thực hành tạo hàm sum 2:
/*
Hãy tạo 1 hàm có tên là sum có 2 tham số:
Tham số thứ 1 là a
Tham số thứ 2 là b
*/

function sum(a, b) {}

// ⭐ Bài 46. Thực hành tạo hàm triple 2:
// Hãy tạo 1 hàm có tên là triple có 1 tham số x.

function triple(x) {}

// ⭐ Bài 48. Thực hành tạo hàm sum 3:
// Hãy tạo hàm sum, hàm có 2 tham số a, b và trả về tổng của 2 tham số.

function sum1(a, b) {
  return a + b;
}
// console.log(sum1(3, 5));
// ⭐ Bài 50. Thực hành tạo hàm triple 3:
// Hãy tạo hàm triple, hàm có 1 tham số x và trả về giá trị gấp 3 lần x. Ví dụ, x = 3 thì hàm triple sẽ trả về 9.

function triple5(y) {
  return y * 3;
}
// console.log(triple5(6));

// ⭐ Bài 51. Thực hành dùng hàm triple:
// Sử dụng hàm triple đã cho, hãy tạo biến result để lưu kết quả của 10 * 3.

function triple3(b) {
  return b * 3;
}
// console.log(triple3(10));

// ⭐ Bài 54. Thực hành tạo các loại hàm:
/*
Tạo 2 hàm declarationFunction và expressionFunction thỏa mãn các yêu cầu sau đây:
declarationFunction là 1 declaration function
expressionFunction là 1 expression function
*/

function declarationFunction() {}
const expressionFunction = () => {};

// ⭐ Bài 56. Thực hành với chuỗi 1:
// Cho trước một biến email, hãy gán giá trị cho nó là một chuỗi.

const email = "email";

// ⭐ Bài 58. Thực hành với chuỗi 2:
// Cho trước chuỗi courses chứa tên các khóa học cách nhau bởi dấu ,.
// Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

const courses = "Java, Ruby, Python";
function strToArray(str) {
  return str.split();
}
// console.log(strToArray(courses));

// ⭐ Bài 59. Hàm lấy độ dài chuỗi:
// Hãy tạo 1 Hàm trả về độ dài của tham số content.

function lengthStr(content) {
  return content.length;
}
// console.log(lengthStr(courses));

// ⭐ Bài 60. Chuyển đổi sang chữ in hoa:
// Hãy tạo hàm getUpperCaseName có 1 tham số là name, hàm này sẽ trả về phiên bản chữ viết hoa của giá trị mà nó nhận được từ name.

function getUpperCaseName(name) {
  return name.toUpperCase();
}
// console.log(getUpperCaseName(courses));

// ⭐ Bài 63. Tạo một biến mang giá trị số:
// Hãy khai báo biến year và gán cho nó một giá trị số nguyên.

const year = 2024;

// ⭐ Bài 64. Viết hàm kiểm tra kiểu number 1:
/*
Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:
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

// ⭐ Bài 65. Viết hàm kiểm tra kiểu number 2: 🚩

function isNumber1(value) {
  if (isNaN(value) || !(typeof value === "number") || value === Infinity) {
    return false;
  } else if (typeof value === "number") {
    return true;
  }
}
// console.log(isNumber1(20 / ""));

// ⭐ Bài 67. Thực hành tạo array 1:
// Tạo biến games với giá trị là 1 array, array này có ít nhất 3 phần tử là tên của các games mà bạn biết.

const family = ["Thu Trang", "Hạ Trang", "Xuân Bảo"];

// ⭐ Bài 70. Làm việc với mảng 1:
// Hàm joinWithCharacter có 2 tham số là array và charactor, hãy viết nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.

const charactor12 = "Nguyễn";
const array1 = ["Hạ", "Trang"];

function joinWithCharacter(a, c) {
  const str = a.join(" ");
  const result = `${c} ${str}`;
  return result;
}

const fullName1 = joinWithCharacter(array1, charactor12);

// ⭐ Bài 71. Làm việc với mảng 2:
// Hãy tạo hàm getLastElement có 1 tham số (Gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.

const getLastElement = (element) => {
  return element.pop();
};
// console.log(getLastElement(array1));

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
const parrot = new Animal("vẹt", 2, "20km/h");
// console.log(parrot);

// ⭐ Bài 78. Thêm phương thức getFullName:
// Hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.

const Student = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

Student.prototype.address = "Hà Nội";

const studentA = new Student("Hạ", "Trang");
studentA.age = 15;
// console.log(studentA.address);
// console.log(studentA.firstName);
// console.log(studentA.getFullName());

const studentB = new Student("Thu", "Trang");
studentB.age = 23;
// console.log(studentB.address);

// ⭐ Bài 80. Hoàn thiện hàm getNextYear:
// Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.

const date = new Date();

const getNextYear = (date) => {
  return date.getFullYear() + 1;
};

// console.log(getNextYear(date));

// ⭐ Bài 82. Lấy ngẫu nhiên phần tử của mảng:
// Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.

const number = ["1234", "9344", "5678", "a", "b", "c", "d", "e", "f", "g"];
const getRandomItem = (num) => {
  // const random = Math.ceil(Math.random() * num.length - 1);
  const random = Math.ceil(Math.random() * (num.length - 1 - 5) + 5);
  return num[random];
};
const result1 = getRandomItem(number);

// console.log(result1);

// ⭐ Bài 84. Thử thách khó, dùng If/else:
// Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:
/* Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 5 thì return về 2
Khi a chia hết cho 15 thì return về 3 */

const a = 15;
const run = (a) => {
  if (a % 3 === 0 && a % 5 === 0) {
    return 3;
  } else if (a % 5 === 0) {
    return 2;
  } else if (a % 3 === 0) {
    return 1;
  }
};

// console.log(run(a));

// ⭐ Bài 86. Hoàn thành code còn thiếu 1 :
// Cho trước một đoạn mã bị thiếu phần switch case, hãy bổ sung để hoàn thiện đoạn mã.

function run2(fruits) {
  var result;

  switch (fruits) {
    case "Banana":
      result = "This is a Banana";
    // break;
    case "Apple":
      result = "This is an Apple";
      break;
    default:
      result = "I don't know";
      break;
  }

  return result;
}

// ⭐ Bài 87. Hoàn thành code còn thiếu 2: (như bài trên)

// ⭐ Bài 89. Hàm kiểm tra đủ tuổi bỏ phiếu:
// Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.

const age2 = 10;

const getCanVoteMessage = (age) => {
  const message = age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
  return message;
};

// console.log(getCanVoteMessage(age2));

// ⭐ Bài 92. Tạo danh sách số ngẫu nhiên:
/*
Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.
👉

// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.

// Hàm này sẽ trả về một mảng ⭐ gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
*/

const min = 100;
const max = 6000000000;
const arrLength = 25;

const getRandNumbers = (min, max, length) => {
  const arr = [];

  for (let index = 0; index < length; index++) {
    const element = Math.ceil(Math.random() * (max - min) + min);
    const formatted = element.toLocaleString("vi-VN"); // de-DE
    arr.push(formatted);
  }

  return arr;
};
const result105 = getRandNumbers(min, max, arrLength);
// console.log(result105);

// ⭐ Bài 94. Tính tổng các phần tử là số của mảng:
// Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.

const number2 = [1, 2, 3, 4, 5, 6, 7, 8];

const getTotal = (array) => {
  let result = 0;

  for (let index = 0; index < array.length; index++) {
    result += array[index];
  }
  return result;
};

const result405 = getTotal(number2);
// console.log(result405);

// ⭐ Bài 96. Tính tổng giá trị đơn hàng:
/*
Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.
Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
*/

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

const getTotal12 = (arr) => {
  let total = 0;

  for (let index = 0; index < arr.length; index++) {
    total += arr[index].price;
  }

  return total.toLocaleString("vi-VN");
};

const result202 = getTotal12(orders);
console.log(result202);

// ⭐ Bài 98. Bài tập sử dụng for...in:
/*
Quan sát code cho trước và kết quả mong đợi (bên code editor).
*/

const object = {
  name: "Nguyễn Hạ Trang",
  age: 15,
};

const getObject = (obj) => {
  let arr = [];

  for (const key in obj) {
    if (key === "name") {
      arr.push(`Tên tôi là: ${obj[key]}`);
    } else if (key === "age") {
      arr.push(`Tuổi của tôi là: ${obj[key]}`);
    }
  }

  return arr;
};

const result303 = getObject(object);
console.log(result303);

// ⭐ Bài 107. Thực hành làm việc với mảng:
/* Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
Gợi ý: Sử dụng phương thức filter. */

const favourite = [
  {
    name: "Vẽ",
    like: 10,
  },
  {
    name: "Hát",
    like: 9,
  },
  {
    name: "Nhảy",
    like: 5,
  },
];
const likeMost = favourite.filter((favourite) => {
  return favourite.like > 5;
});
// console.log(likeMost);

// ⭐ Bài 110. Thực hành sử dụng phương thức reduce 1:
// Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.

const totalInterestScore = favourite.reduce((score, favourite) => {
  return score + favourite.like;
}, 0);
// console.log(totalInterestScore);

// ⭐ Bài :
// ⭐ Bài :
// ⭐ Bài :
// ⭐ Bài :
// ⭐ Bài :
