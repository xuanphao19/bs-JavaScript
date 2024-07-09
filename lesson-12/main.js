// LÀM VIỆC VỚI ĐỐI TƯỢNG DATE

const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year);
console.log(month);
console.log(day);

// LÀM VIỆC VỚI ĐỐI TƯỢNG MATH

/*
Math.PI(); // Trả ra số PI: 3.14
Math.round(); // Làm tròn biên độ 0.5
Math.abs(); // Giá trị tuyệt đối
Math.ceil(); // Làm tròn trên
Math.floor(); // Làm tròn dưới
Math.random(); // Trả về một số thập phân ngẫu nhiên nhỏ hơn 1
Math.max(); // Trả về số lớn nhất trong dãy số
Math.min(); // Trả về số nhỏ nhất trong dãy số
*/

console.log(Math.PI);

console.log(Math.round(5.1039));

console.log(Math.abs(-9));

console.log(Math.ceil(6.00001)); // 7
console.log(Math.floor(6.9999999)); // 6

console.log(Math.random());
console.log(Math.floor(Math.random() * 100)); // Giao động số ngẫu nhiên từ 0-99

const random = Math.floor(Math.random() * 7);
const bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin", "60 coin", "70 coin"];
console.log(bonus[random]);

// Áp dụng thực tiễn: làm game cường hóa đồ

const random3 = Math.floor(Math.random() * 100);
if (random3 < 5) {
  console.log("Cường hóa thành công 5%");
} else if (random3 < 50) {
  console.log("Cường hóa thành công 50%");
}

const min = Math.min(600, 30, 40, 50, 60);
console.log(Math.min(min));
const max = Math.max(600, 30, 40, 50, 60);
console.log(Math.max(max));
