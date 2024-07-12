// BÀI1 : KHÁI NIỆM KHAI BÁO BIẾN

// var let const dùng để khai báo biến

// var let có thể gán lại được giá trị.

// const Không thể gán lại được giá trị (Khi là kiểu dữ liệu nguyên thủy)

var fullName = "NGUYỄN HẠ TRANG-15";
// alert(fullName);

var a1 = 12;
const a2 = { as: "12" };

a1 = 20;

// a2 = "123"; // Không thực hiện được với const
a2.as = 123;
a2.ab = 123456;
