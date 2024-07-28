/*








*/
// ⭐⭐ JSON ⭐⭐
console.log("⭐⭐ JSON ⭐⭐");
// + Là một định dạng dữ liệu (chuỗi)
// + Viết tắt của: JavaScript Object Notation
// + JSON thể hiện các kiểu dữ liệu:
// Number, String, Boolean, Null, Array, Object

// 🌻 Stringify: Từ JavaScript type -> JSON

// console.log(JSON.stringify(["Trang Cún 🐍", "Trang Chíp 🐃"]));
// console.log(JSON.stringify(2009));
// console.log(
//   JSON.stringify({
//     name: "Trang Cún🐍🐍",
//     age: 23,
//   }),
// );

// 🌻 Parse: Từ JSON -> JavaScript type

/* const jsonArr = '["Hạ Trang", "Thu Trang"]';
console.log(JSON.parse(jsonArr));
 */
/* const jsonObj = '{"name": "Hạ Trang", "age": 15}';
console.log(JSON.parse(jsonObj)); */

/* const jsonNum = "1234";
console.log(JSON.parse(jsonNum)); */

/* const jsonStr = '"Hello 💕💕"';
console.log(JSON.parse(jsonStr)); */

/* const jsonNull = "null";
console.log(JSON.parse(jsonNull)); */

/* const jsonBoolean = "true";

console.log(JSON.parse(jsonBoolean)); */

const promise = new Promise((resole, reject) => {
  const a = 1;
  const b = 2;
  // Logic tính toán mất thời gian trả ra gì đó!
  const isUpdateVideo = a < b;

  if (isUpdateVideo) {
    // Gọi resole Khi thành công
    resole(`${a} Không phải là số nhỏ hơn ${b}`);
  } else if (!isUpdateVideo) {
    // Gọi reject Khi thất bại
    reject("Lỗi: a Không phải là số nhỏ hơn b");
  }
});

// Trả ra một Object // Object này có 3 phương thức
promise
  .then((result) => {
    const htmls = `<h1>${result}</h1>`;
    console.log(htmls);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Đã xong 🐃!");
  });
