/**
1.⭐ Primitive Types (Kiểu nguyên thủy):
 * Number: Dùng để biểu diễn các giá trị số, ví dụ: 42, 3.14.
 * String: Dùng để biểu diễn các chuỗi ký tự, ví dụ: "Hello, World!".
 * Boolean: Dùng để biểu diễn hai giá trị đúng (true) hoặc sai (false).
 * Null: Dùng để biểu diễn giá trị "rỗng" hoặc "không tồn tại".
 * Undefined: Dùng để biểu diễn giá trị chưa được khởi tạo.
 * Symbol: Được giới thiệu trong ECMAScript 6 (ES6), dùng để biểu diễn các giá trị duy nhất và bất biến.
 *
2.⭐ Non-Primitive Types (Kiểu không nguyên thủy):
* Object: Dùng để biểu diễn các đối tượng có thể chứa nhiều giá trị dưới dạng các cặp key-value.
* Ví dụ: { name: "John", age: 30 }.
* Array: Là một loại đối tượng đặc biệt dùng để lưu trữ danh sách các giá trị,
* Ví dụ: [1, 2, 3, 4].
* Function: Cũng là một loại đối tượng nhưng có thể được gọi hoặc thực thi,
* Ví dụ: function greet() { console.log("Hello"); }.

 */
// ⭐ Primitive Types (Kiểu nguyên thủy):
// Number
// var age = 15;
// var pi = 3.14159;

// // String
// var name = "Alice";
// var greeting = "Hello, World!";

// // Boolean
// var isStudent = true;
// var isLoggedIn = false;

// // Null
// var emptyValue = null;

// // Undefined
// var notAssigned;

// // Symbol
// var uniqueID = Symbol("id");

// ⭐ Non-Primitive Types (Kiểu không nguyên thủy):
// Object
var person = {
  name: "Bob",
  age: 25,
  isStudent: true,
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
};
var num = 123;
var name = "Bob";

// // Array
// var numbers = [1, 2, 3, 4, 5];

// // Function
// function greet() {
//   console.log("Hello!");
// }

// // 3.⭐ Kiểm tra kiểu dữ liệu:

// console.log(typeof age); // "number"
// console.log(typeof greeting); // "string"
// console.log(typeof isStudent); // "boolean"
// console.log(typeof emptyValue); // "object" (là lỗi thiết kế trong JavaScript)
// console.log(typeof notAssigned); // "undefined"
// console.log(typeof uniqueID); // "symbol"
// console.log(typeof person); // "object"
// console.log(typeof numbers); // "object"
// console.log(typeof greet); // "function"'

// Khi gọi một phương thức cần ghi nhớ:
//⭐ Có nhận tham số không?
//   Có nhận tham số
//⭐ Nhận vào mấy tham số?
//   Có thể nhận một hoặc hai tham số
//⭐ Nếu không truyền tham số vào:
// * Nó hoạt động ? Trả về cái gì?
//⭐ Nếu truyền vào một tham số:
// * Nó hoạt động như nào? Trả về cái gì?
//⭐ Nếu truyền vào đủ tham số:
// * Nó hoạt động như nào? Trả về cái gì?
//⭐ Nếu tham số không đúng (không tồn tại) trả về cái gì?

// LÀM VIỆC VỚI CHUỖI String:

var fullName = "Hạ \nTrang"; // Khai báo một chuỗi
console.log(fullName);
// Muốn chèn ký tự đặc biệt thì dùng dấu "\"
// Dùng "\" như nào?
// "\n dùng để hiển thị xuống dòng"

var firstName = "Nguyen";
var lastName = "Trang";

// Nối chuỗi bằng dấu backtick (`${}`)
console.log(`Toi là ${firstName} ${lastName}`);
console.log(`Toi là ${firstName + lastName}`);
console.log(`Toi là: ${firstName + ` Thi Thu ${lastName}`}`);
// `${}` Trả về: type String

var fullName1 = "Hạ Trang";
console.log(fullName1.length);
// Kiểm tra độ dài chuỗi bằng thuộc tính length
// fullName1.length trả về số ký tự có trong chuỗi
// tính cả khoảng trắng

var myString1 = "Xuan Bao Bao";
console.log(myString1.indexOf("Bao"));
// indexOf Tìm vị trí của chuỗi con hoặc ký tự
// trong một chuỗi myString1.indexOf("Bao")

// Có thể nhận một hoặc hai tham số
// Nhận một tham số là chuỗi con hoặc ký tự chuỗi
// Phương thức indexOf trả về index (kiểu Number) của ký tự
// đầu tiên của chuỗi con mà nó tìm được trong chuỗi myString1
// Nếu chuỗi con hoặc ký tự không tồn tại trong myString1 thì trả về -1

console.log(myString1.indexOf("B", 7));
// Nhận vào hai đối số: đối số 1 là một ký tự hoặc chuỗi
// đối số thứ 2 là vị trí bắt đầu tìm kiếm
// Nếu tìm thấy sẽ trả về vị trí đầu tiên tìm được
// Nếu không tìm thấy sẽ trả về -1

console.log(myString1.lastIndexOf("Bao"));
// Phương thức lastIndexOf Tìm ví trí chuỗi con hoặc
// ký tự cuối cùng lặp lại trong chuỗi myString1
// Nhận một tham số là chuỗi con hoặc ký tự chuỗi
// Trả về index của chuỗi con hoặc ký tự chuỗi
//🟢 (chuỗi con hoặc ký tự chuỗi cuối cùng trong kết quả tìm được)
// Nếu không tìm thấy sẽ trả về -1

console.log(myString1.search(/Bao/g));
// Tương tự lastIndexOf: trả về (cuối cùng)
// Nhận một tham số là một biểu thức chính quy (search)
// Trả về index của chuỗi con hoặc ký tự chuỗi
// Nếu không tìm thấy sẽ trả về: -1

var myString2 = "Xuan Bao";
// Phương thức slice: dùng để cắt ký tự trong chuỗi myString2.
// Cắt từ trái sang phải: thì truyền vào số dương.
// Cắt từ phải sang trái: thì truyền vào số âm.
// slice Có thể nhận một hoặc hai tham số:
// Tham số 1 vị trí bắt đầu cắt
// Tham số 2 vị trí kết thúc (🟢 Không bao gồm vị trí kết thúc)

console.log(myString2.slice(0, 5));
// Khi chỉ truyền 1 tham số thì đó là vị trí bắt đầu cắt và cắt cho đến hết chuỗi.
// Ví dụ: truyền số 0 vào thì sẽ cắt từ đầu đến hết (🟢có thể dùng để copy chuỗi)
// Phương thức slice - Trả về: chuỗi đã bị cắt
// Nếu không có index đó trong chuỗi sẽ trả về một chuỗi rỗng

var myString3 = "Nguyen Thu Trang";
console.log(myString3.replace("Thu", "Hạ"));
// Phương thức replace sẽ thay thế tham số 1 bằng tham số 2
// Chỉ nhận hai tham số
// Ghi đè ký tự (chuỗi con) đầu tiên mà nó gặp trong chuỗi myString3
// Phương thức replace trả về: chuỗi mới đã ghi đè ký tự (chuỗi con)

var string3 = "Nguyen Thu Trang Trang Trang";
console.log(string3.replace(/Trang/g, "Xuân Bảo"));
// Khi muốn thay thế nhiều ký tự lặp lại thì ta sử dụng biểu thức chính quy
// Phương thức replace trả về: chuỗi mới đã ghi đè ký tự (chuỗi con)

var myString4 = "Xuan Bao";
console.log(myString4.toUpperCase());
// Phương thức toUpperCase sẽ trả về chuỗi viết thành chữ in hoa

var myString5 = "Xuan Bao";
console.log(myString5.toLowerCase());
// Phương thức toLowerCase sẽ trả về chuỗi viết thành chữ thường

var myString6 = "      Xuan Bao    ";
console.log(myString6.trim());
// Dùng để loại bỏ khoảng trắng dư thừa ở hai đầu của chuỗi.
// Phương thức trim() trả về: chuỗi đã loại bỏ khoảng trắng ở hai đầu

// Convert string to Array:
var myString7 = "Xuan Bao, Ha Trang, Thu Trang";
console.log(myString7.split(", "));
// Chỉ nhận một tham số. (string type)
// Phương thức SPLIT quy đổi chuỗi thành ARRAY
// Phải tìm điểm chung hợp lý để cắt.
// split Trả về mảng (Array): ["Xuan Bao", "Ha Trang", "Thu Trang"]

// Lấy ra giá trị chuỗi tại vị trí index chỉ định:
//Cách 1:
const myString8 = "Xuan Bao";
console.log(myString8.charAt(5));
// Chỉ nhận một tham số (number type)
// Phương thức charAt trả về: giá trị chuỗi tại vị trí index chỉ định.
// Khi truyền một vị trí không có thì sẽ trả về một chuỗi rỗng

//Cách 2: Truyền index vào cặp ngoặc []
const myString9 = "Xuan Bao";
console.log(myString9[5]);
// Chỉ nhận 1 tham số (number type)
// Cú pháp; "string" theo sau là cặp ngoặc [] và truyền index vào.
// Khi truyền một vị trí không có thì sẽ trả về undefined

// LÀM VIỆC VỚI SỐ Number:

// Khởi tạo một số trong JavaScript:
// Cách 1: Gán bình thường
var age = 15;
// Cách 2: Thông qua đối tượng Number của JS
var age1 = new Number(18);

// NaN trong JavaScript: (Là một số không phải là số)
// Phép tính không hợp lệ trả về NaN
var result = 20 / "ABC"; // NaN
// Type of vẫn trả ra number
// Muốn kiểm tra thì phải sử dụng hàm isNaN()
console.log(isNaN(result)); // true

// Convert Number to String:
var age = 15;
console.log(age.toString()); // => String
// Không truyền tham số

// Round decimal numbers:
var PI = 3.14;
console.log(PI.toFixed());
// Làm tròn số thập phân
// Trả ra string
// Làm tròn đến số gần nhất, biên độ 0.5

var PI1 = 3000.389702;
console.log(PI1.toFixed(2));
// Có truyền tham số
// Có thể nhận một tham số (number type)
// Tham số được truyền để quy định số các chữ số thập phân.
// Trả ra string mang giá số có phần thập phân đã rút gọn

// Kiểm tra xem giá trị có phải là số hữu hạn hay không:
Number.isFinite(10); // true
// Phương thức Number.isFinite() nhận một tham số (number type)
// Trả về boolean (Số hữu hạn: true, Không phải số hữu hạn: false)

// LÀM VIỆC VỚI MẢNG (Array)

// Khởi tạo một Array: Create a new array
// Cách 1: Gán bình thường
var number10 = ["100000", "875000", "3600"];

// Cách 2: Thông qua đối tượng Array của JS
var number11 = new Array("100", "947289", "728");

// Cách Kiểm tra kiểu dữ liệu của Arr:
console.log(typeof number10); // Object
console.log(Array.isArray(number10)); // Boolean
console.log(number10 instanceof Array); // true
console.log({ a: 1 } instanceof Object); // true

// Kiểm tra độ dài mảng:
console.log(number11.length);
// Trả về trả về số phần tử có trong mảng

// Lấy phần tử theo index:
console.log(number10[1]);
// Viết Arr tiếp theo là [] và truyền number vào []
// Trả về: phần tử được lấy

// Convert mảng sang string:
var languages = ["JavaScript", "PHP", "Ruby"];
var newLanguages = languages.toString();
// Không nhận tham số
//🟢 Trả về: "JavaScript,PHP,Ruby"
//🔴 Tôi muốn sau mỗi dấu phẩy có dấu cách ?
console.log(newLanguages.replace(/,/g, ", ")); // => String

console.log(languages.join(" - ")); // => String
// Thay đổi dấu ',' mặc định thành một dấu khác
//🟢 Có thể nhận tham số:

var languages1 = ["JavaScript", "PHP", "Ruby"];
console.log(languages1.pop());
console.log(languages1);
// Không nhận tham số
// Xóa elements cuối mảng và trả về phần tử đã xóa (string)
//🟢 Khi mảng trống phương thức pop() sẽ trả về undefined
//🟢 [].pop() === undefined;

var languages2 = ["JavaScript", "PHP", "Ruby"];
console.log(languages2.push("Dart", "Java"));
// Thêm một hoặc nhiều elements vào cuối mảng
// Có truyền tham số và có thể truyền một hoặc nhiều tham số
// Trả về độ dài mới của mảng sau khi thêm phần tử

var languages3 = ["JavaScript", "PHP", "Ruby"];

console.log(languages3.shift()); // "JavaScript"
console.log(languages3); // ["PHP", "Ruby"]
// Không nhận tham số
// Xóa elements đầu mảng và trả về phần tử đã xóa
// Khi mảng trống mà sử dụng phương thức shift sẽ trả về undefined
//🟢 [].shift() === undefined;

var languages4 = ["JavaScript", "PHP", "Ruby"];
console.log(languages4.unshift("Dart"));
console.log(languages4);
// Có nhận một hoặc nhiều tham số
// Thêm một hoặc nhiều elements vào đầu mảng và trả về độ dài mới

var languages5 = ["JavaScript", "PHP", "Ruby"];
// languages5.splice();
console.log(languages5.splice()); // languages5.splice(5)
// Không truyền gì hoặc truyền số không phải là index trong mảng: splice không làm gì cả và trả về mảng rỗng.
console.log(languages5.splice(0));
// Nếu truyền MỘT đối số: Thì bắt đầu xóa từ vị trí index tương ứng cho đến hết element trong mảng // Trả về một mảng các element đã xóa.

console.log(languages5.splice(0, 1));
// Nếu truyền hai đối số:
// Đối số 1: Xác định vị trí bắt đầu xóa.
// Đối số 2: Quyết định xóa bao nhiêu element.

var languages6 = ["JavaScript", "PHP", "Ruby"];
languages6.splice(1, 0, ["Java"], "Dart", 18, { name: "HaTrang" });
console.log(languages6);
// Nếu truyền từ ba đối số trở lên thì từ đối số thứ ba sẽ là elements được chèn vào mảng.
// Chèn thêm 1 hoặc nhiều element vào mảng
// Tham số 1: vị trí chèn
// Tham số 2: quyết định xóa bao nhiêu El?

// Phương thức concat: Hợp nhất Mảng.
var myFamily = ["Xuân Pháo", "Trang Chíp", "Trang Cún"];
console.log(myFamily.concat(languages6));
// myFamily.concat(languages6) === ["Xuân Pháo", "Trang Chíp", "Trang Cún", "JavaScript", "PHP", "Ruby"];
// Có thể nhận một hoặc nhiều tham số
// Nối được các array với nhau
// Mảng gọi đến phương thức concat là mảng gốc và mảng được truyền vào là mảng được hợp nhất với mảng gốc
// Mảng đã hợp nhất.

var languages8 = ["JavaScript", "PHP", "Ruby"];
console.log(languages8.slice(1, 2));
//🟢 Tương tự với phương thức slice("Chuỗi")
// Khi chỉ truyền 1 tham số thì đó là vị trí bắt đầu cắt và cắt cho đến hết mảng.
// Ví dụ: truyền số 0 vào thì sẽ cắt từ đầu đến hết (🟢có thể dùng để copy mảng)
// Phương thức slice - Trả về: Mảng elements đã cắt
// Nếu không có index đó trong mảng sẽ trả về một mảng rỗng

// LÀM VIỆC VỚI OBJECT (Đối tượng)

var myInfo = {
  name: "Ha Trang",
  age: 15,
  address: "Ha Noi, VN",
};

// Thêm một cặp key và value sau khi object được tạo:

myInfo.fullName = "Xuân Bảo"; // Thêm fullName vào myInfo
console.log(myInfo);

var myInfo1 = {
  name: "Ha Trang",
  age: 15,
  address: "Ha Noi, VN",
};
// Lấy 1 value ra ngoài
// Cách 1:
console.log(myInfo1.name); // "Ha Trang"

console.log(myInfo1["email"]); // undefined
// Khi lấy một cái key không có trong Obj sẽ trả về undefined
// Cách 2:
console.log(myInfo1["age"]);

var myInfo2 = {
  name: "Ha Trang",
  age: 15,
  address: "Ha Noi, VN",
};

var myKey = "address";
console.log(myInfo2[myKey]);
// Lấy value thông qua biến thay key
// (biến phải được gán giá trị trùng tên key của Obj)

var emailKey = "email";
var myInfo4 = {
  name: "Ha Trang",
  age: 15,
  address: "Ha Noi, VN",
  [emailKey]: "Thu Trang",
};
console.log(myInfo4);
// Định nghĩa, thêm 1 key mới bằng một biến.

var myInfo5 = {
  name: "Ha Trang",
  age: 15,
  address: "Ha Noi, VN",
};
delete myInfo5.age;
console.log(myInfo5);
// Xóa đi một cặp key và value trong object
// Xóa hết các cặp key và value trong object
// thì sẽ trả ra object trống

var myInfo6 = {
  firstName: "Ha Trang",
  lastName: "Nguyễn ",
  age: 15,
  address: "Ha Noi, VN",
  gender: "Nữ",

  getName: function () {
    const fullNames = this.lastName + this.firstName;
    return fullNames;
  },
};
const tenCuaToi = myInfo6.getName();
console.log(tenCuaToi);

// Object constructor : Trình tạo đối tượng

// constructor
function MyFamily(name, age, gender, bio) {
  this.firstName = name;
  this.lastName = "Nguyễn ";
  this.age = age;
  this.gender = gender;
  this.bio = bio;
  this.height = "1.5m";

  this.getName = function () {
    const fullNames = this.lastName + this.firstName;
    return fullNames;
  };
  this.setName = function () {
    const fullNames = this.lastName + this.firstName;
    return fullNames;
  };
}

var thuTrang = new MyFamily("Thu Trang", 23, "female", "màu tím");
thuTrang["height"] = "1.58m";
console.log(thuTrang, thuTrang.getName());

var haTrang = new MyFamily("Ha Trang", 13, "female", "màu hồng");
haTrang.canNang = "54kg";
haTrang.height = "1.68m";
haTrang.setHeight = (height) => {
  if (height) {
    haTrang.height = height;
  } else {
    haTrang.height = "1m";
  }
};

haTrang.setHeight();

console.log(haTrang, haTrang.getName());

var phao = new MyFamily("Pháo Xuân", 6, "men", "màu Đỏ");
phao.height = "0.99m";
console.log(phao, phao.getName());

// Object prototype :

function MyFamily12(name, age, gender, bio) {
  this.firstName = name;
  this.age = age;
  this.gender = gender;
  this.bio = bio;

  this.getName = function () {
    const fullNames = this.lastName + this.firstName;
    return fullNames;
  };
}

MyFamily12.prototype.height = "1.6m";

var chiToi = new MyFamily12("Thu Trang", 23, "Nữ", "màu vàng");
var itsMe = new MyFamily12("Hạ Trang", 15, "Nữ", "màu xanh");

console.log(chiToi.height);
console.log(itsMe);
