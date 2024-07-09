var fullName = "NGUYỄN HẠ TRANG-15";
console.log(fullName);

// BÀI 4: Toán Tử Trong JS: Operators in JS!

//📐 Toán tử số học: Arithmetic Operators
var a = 10;
var b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 // Chia lấy dư!
console.log(a ** b); // 100000 // Lũy thừa

//🚩 Toán tử gán: Assignment Operators
var c = 20;
c += 5; // c = c + 5; c = 25
c -= 5; // c = c - 5; c = 20
c *= 2; // c = c * 2; c = 40
c /= 4; // c = c / 4; c = 10
c %= 3; // c = c % 3; c = 1

//😍 Toán tử so sánh: Comparison Operators
// Kết quả của phép so sánh chỉ trả về true or false!

// ==: Bằng (không phân biệt Kiểu dữ liệu)
// ===: Bằng (phân biệt Kiểu dữ liệu)
// !=: Khác (không phân biệt Kiểu dữ liệu)
// !==: Khác (phân biệt Kiểu dữ liệu)
// >: Lớn hơn
// <: Nhỏ hơn
// >=: Lớn hơn hoặc bằng
// <=: Nhỏ hơn hoặc bằng

var d = 10;
var e = "10";

console.log(d == e); // true
console.log(d === e); // false
console.log(d != e); // false
console.log(d !== e); // true
console.log(d > 5); // true
console.log(d < 15); // true
console.log(d >= 10); // true
console.log(d <= 10); // true

//⭐ Toán tử logic: Logical Operators
var f = true;
var g = false;

console.log(f && g); // false
// const result = a && b && c
// Nếu không phải là biểu thức cuối Mà giá trị là
// 1 trong 6 trường hợp convert => false => Dừng và
// gán giá trị đó cho result
// Nếu đi được đến biểu thức cuối thì
// lấy giá trị biểu thức cuối gán cho result.
console.log(f || g); // true // Ngược lại với &&
// const result = a || b || c
// Cứ biểu thức nào nằm ngoài 1 / 6 trường hợp convert => false
// Thì dừng và gán giá trị biểu thức đó cho result.
console.log(!f); // false
console.log(!g); // true

// Toán tử tăng giảm: Increment and Decrement Operators
var h = 5;
// Tiền tố:
// Tham chiếu biến gốc
// Gán giá trị tính toán cho biến gốc
// Trả về giá trị tính toán cho logic khác

++h; // h = h + 1; h = 6
--h; // h = h - 1; h = 5
var i = ++h + h;
//=> i = 6 + 6;

// Hậu tố:
// Tham chiếu biến gốc
// Gán giá trị sau tính toán cho biến gốc
// Trả về giá trị copy cho logic khác

h++; // h = h + 1; h = 6
h--; // h = h - 1; h = 5
var k = h-- + h;
//=> k = 5 + 4;

// Toán tử điều kiện Conditional/Ternary Operator
// Còn gọi là toán tử Ba ngôi:
// var age = 18;
// var canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // Yes

// Toán tử kiểu: Type Operators
console.log(typeof 123); // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
console.log([1, 2, 3] instanceof Array); // true
console.log({ a: 1 } instanceof Object); // true

// Hiểu rõ các toán tử TRÊN sẽ giúp bạn viết mã JavaScript một cách hiệu quả và chính xác hơn. result === success!
