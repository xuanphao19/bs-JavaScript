// Làm việc với mảng II
/*
  forEach(callback) // Thực hiện hành động được chỉ định

  every(callback) // Kiểm tra điều kiện
  some(callback) // Kiểm tra điều kiện
  find(callback) // Tìm kiếm
  filter(callback) // Tìm kiếm
  map(callback) // Vẽ bản đồ mảng

  reduce(callback) // Tính toán gì đó!


*/

// every; some; find; Có thể lặp qua tất cả các phần tử của mảng!
// forEach;filter;map;reduce; sẽ lặp qua tất cả các phần tử của mảng!

const myFamily = [
  {
    id: "mother",
    name: "Hiệp",
    age: 50,
    height: "1.64m",
  },

  {
    id: "sister",
    name: "Thu Trang",
    age: 23,
    height: "1.58m",
  },

  {
    id: "my",
    name: "Hạ Trang",
    age: 15,
    height: "1.68m",
  },

  {
    id: "sister1",
    name: "Thu Trang",
    age: 23,
    height: "1.63m",
  },

  {
    id: "sister2",
    name: "Thu Trang",
    age: 23,
    height: "1.60m",
  },

  {
    id: "phao",
    name: "Xuan Pháo",
    age: 6,
    height: "1.60m",
  },
];

const forEach = myFamily.forEach(function (member, index) {
  console.log(index, member.height);
  return member;
});

console.log(forEach);

const height = myFamily.every(function (member, index) {
  return member.height === "1.64m"; // true or false
});
console.log(height);
// Kiểm tra tất các phần tử có thỏa mãn một điều kiện nào đó.
// Nó trả về true nếu tất cả các phần tử thỏa mãn điều kiện, và false nếu có ít nhất một phần tử không thỏa mãn.
// Trả ra kiểu dữ liệu boolean

const age = myFamily.some(function (member, index) {
  return member.age < 15;
});

console.log(age);
// Giống với phương thức every nhưng chỉ cần một phần tử thỏa mãn điều kiện thì sẽ trả về true

const findMom = (member, index) => {
  return member.age < 15;
};
const mom = myFamily.find(findMom);

console.log(mom);

//⭐ Phương thức find dùng để tìm các phần tử mảng
// Nếu tìm thấy phần tử cần tìm thì phương thức find trả về chính phần tử đó
// Nếu không có sẽ trả về undefine
// Chỉ tìm ra được một phần tử, trả về phần tử đầu tiên tìm được nếu có phần tử lặp lại với phần tử cần tìm

const sister = myFamily.filter((member, index) => {
  return member.name === "Thu Trang";
});
console.log(sister);
// Giống với phương thức find
// Tìm hết các phần tử nếu có lặp lại
// Nếu không tìm thấy nó sẽ trả ra một array rỗng

const newFamily = myFamily.map(function (member, i) {
  return member;
});
console.log(newFamily);

const callBack = (sum, member) => {
  let result = sum + member.age;
  console.log(result);
  return result;
};

const sumAge = myFamily.reduce(callBack, 0);
console.log(sumAge);

//-----  BÀI TẬP  -----// trong F8

const myFavourite = [
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

const likeMost = myFavourite.filter((favourite) => {
  return favourite.like > 5;
});
console.log(likeMost);

const totalInterestScore = myFavourite.reduce((score, favourite) => {
  return score + favourite.like;
}, 0);
console.log(totalInterestScore);

//-----  VÍ DỤ VỀ VIỆC TỰ TẠO PHƯƠNG THỨC REDUCE  -----//

Array.prototype.reduce2 = function (callback, result) {
  // Lặp qua từng phần tử của mảng

  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5];

const getTotal = (total, number) => {
  return total + number;
};

const result = numbers.reduce2(getTotal, 20);

console.log(result);

// Cách Tạo Phương Thức reduce Tự Chế của Chat GPT:

Array.prototype.myReduce = function (callback, initialValue) {
  // Lấy mảng hiện tại
  const array = this;

  // Giá trị khởi tạo accumulator
  let accumulator = initialValue;

  // Lặp qua từng phần tử của mảng
  for (let i = 0; i < array.length; i++) {
    // Áp dụng hàm callback và cập nhật accumulator
    accumulator = callback(accumulator, array[i], i, array);
  }

  // Trả về kết quả cuối cùng
  return accumulator;
};

// Sử dụng myReduce để tính tổng các phần tử trong mảng
const sum = numbers.myReduce((acc, currentValue) => acc + currentValue, 0);

console.log(sum); // Output: 15

// Phương thức includes():
// Là phương thức tồn tại sẵn trong str và arr
// Trả về true or false

// Với str để kiểm tra trong chuỗi có một từ nào đó không
const title = "Đây là một tiêu đề";
console.log(title.includes("là"));
// Tham số 1: Từ cần tìm kiếm
// Tham số 2: Vị trí bắt đầu tìm kiếm
// Tìm thấy trả ra true và ngược lại

// Với arr để kiểm tra trong mảng có phần tử nào đó không
const myFamily102 = ["Thu Trang", "Hạ Trang", "Xuân Bảo"];
console.log(myFamily102.includes("Thu Trang"));
// Tham số 1: Từ cần tìm kiếm
// Tham số 2: Vị trí bắt đầu tìm kiếm
// Tìm thấy trả ra true và ngược lại
