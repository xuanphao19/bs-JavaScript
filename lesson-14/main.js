// VÒNG LẶP: LOOP
/*
  for: Lặp với điều kiện đúng
  for-in: Lặp qua key của đối tượng
  for-of: Lặp qua value của dối tượng
  while: Lặp khi điều kiện đúng
  do-while: Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/
// Khi viết vòng lặp không được quên tăng giảm giá trị nếu không nó sẽ trở thành vòng lặp vô hạn và sẽ bị treo trình duyệt ;-;

//⭐ for Loop:

//    for ([initialization]; [condition]; [final-expression]) {
//      // code
//    }

for (var a = 0; a <= 5; a++) {
  console.log(a);
}

// Bắt buộc có đầy đủ 3 đoạn mã
// Nếu không có đoạn mã số 2 vòng for sẽ trở thành vô hạn

const myArray = ["Javascript", "PHP", "Java", "Dart"];
console.log(myArray[0]);
const myLength = myArray.length;

for (var i = 0; i < myLength; i++) {
  console.log(myArray[i]);
}

//⭐ for-in: Lặp qua key của đối tượng
const myInfo20 = {
  name: "Hạ Trang",
  age: "15",
  address: "Hà Nội",
};

for (var key in myInfo20) {
  console.log(key);
  console.log(myInfo20[key]); // value is a string of the object
}
const language = "Java";
for (var key in language) {
  console.log(language[key]);
}
// for-in dùng để lấy ra những key của đối tượng
// for-in Không Phân biệt kiểu dữ liệu

//⭐ for-of: Lặp qua value của dối tượng
const myFamily = ["Thu Trang", "Hạ Trang", "Xuân Bảo"];
for (const value of myFamily) {
  console.log(value);
}
const family = "Trang";
for (const value of family) {
  console.log(value);
}
// Giống với việc lấy phần tử theo index cho trước ở trong chuỗi hoặc mảng
// Chỉ dùng với string and array không dùng được với Obj

//⭐ Cách lấy key và value của một objects:
var obj = {
  name: "Bảo",
  age: 6,
};
// Lấy key:
const keys = Object.keys(obj);
console.log(keys); // => Array các key

// Lấy value:
const values = Object.values(obj);
console.log(values); // => Array các elements

for (var key of Object.keys(obj)) {
  console.log("key:", key);
  console.log("value:", obj[key]);
}

for (var value of Object.values(obj)) {
  console.log(value);
}

//⭐ while: Lặp khi điều kiện đúng
var h = 0;
while (h < 10) {
  h++;
  console.log(h);
}

var myArray5 = ["hạ", "ruby"];
var c = 0;
while (c < myArray5.length) {
  console.log(myArray5[c]);
  c++;
}

//⭐ do-while: Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
var i = 0;

do {
  i++;
  console.log(i);
} while (i < 10);

// Lần đầu lặp sẽ không kiểm tra điều kiện, sẽ kiểm tra điều kiện từ vòng lặp thứ 2

// Ứng dụng thực tế: nạp thẻ điện thoại
var isSuccess = false;
var index = 0;

do {
  index++;

  console.log("Nạp thẻ lần" + index);

  if (!isSuccess) {
    isSuccess = true;
  }
} while (!isSuccess && index < 3);

//⭐ Break & Continue trong Loop
// Có thể sử dụng trong tất cả các loại vòng lặp
// Break để thoát khỏi vòng lặp

for (var j = 0; j < 10; j++) {
  if (j % 2 !== 0) {
    continue;
    // Kết thúc lần lặp hiện tại (Mọi mã sau nó không được thực thi)
    // Tiếp tục thực thi lần lặp mới.
  }

  console.log(j);

  if (j >= 3) {
    break;
  }
}

//⭐ Vòng lặp lồng nhau:

var myArray8 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (var k = 0; k < myArray8.length; k++) {
  // console.log(myArray8[k]);
  // Lấy ra được các mảng con thuộc myArray8

  for (var d = 0; d < myArray8[k].length; d++) {
    console.log(myArray8[k][d]);
  }
}

// Những ví dụ khác

for (var t = 10; t > 0; t--) {
  console.log(t);
}

for (var em = 0; em <= 15; em += 5) {
  console.log(em);
}
