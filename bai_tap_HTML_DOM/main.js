/*






*/
// ⭐⭐--- Pháo! Bài tập HTML DOM: ---⭐⭐
console.log("⭐ 💔BAI TẬP HTML DOM💔 ⭐");

// 9h10 con học bài vì dạy e học tới lúc đấy mới vô học

// ⭐ Bài 134 Thực hành get element:

/*
Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:
  1: productsListElement: thẻ div có class là products-list.
  2: firstProductElement: thẻ div đầu tiên có class là product.
  3: buttonElements: tất cả các thẻ button.

 */

// const productsListElement = document.getElementsByClassName("products-list");
// console.log(productsListElement[0]);

// const firstProductElement = document.querySelector(".products-list .product:first-child");
// console.log(firstProductElement);

// const buttonElements = document.getElementsByClassName("cta-btn");
// console.log(buttonElements);

// ⭐ Bài 139. Thực hành với DOM attribute:
/* Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:
Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h3.
Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h3.
Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a. */

// const titleEl = document.querySelector("h3");
// console.log(titleEl);
// titleEl.title = "F8 - Học lập trình để đi làm";

// titleEl.setAttribute("data-title", "F8 - Học lập trình để đi làm");

// const linkEl = document.querySelector("a");
// linkEl.href = "https://fullstack.edu.vn/"; // Cách 1
// linkEl.setAttribute("target", "_blank"); // Cách 2
// console.log(linkEl);

// ⭐ Bài 141. Thực hành sử dụng InnerText:
// Các bạn hãy thay đổi nội dung của thẻ h2 thành F8 - Học lập trình để đi làm.

// const headingElement1 = document.querySelector("h2");
// headingElement1.innerText = "F8 - Học lập trình để đi làm";

// ⭐ Bài 143. Thực hành sử dụng InnerHTML #1:
// Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.

// const item = "<li>🌺☘💕🌻🌼</li>";

// const render = (html) => {
//   const boxEl = document.querySelector("ul");
//   boxEl.innerHTML = html;
// };

// render(item);

// ⭐ Bài 144. Thực hành sử dụng InnerHTML #2:
/*
Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.
Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:
  ReactJS
  AngularJS
  VueJS
Gợi ý:
Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
*/

// const courses = ["HTML & CSS", "Javascript", "PHP", "Java"];
/* const renderCourses = (courses) => {
  const menu = document.querySelector(".courses-list");
  const elements = courses.map((course) => {
    const newItem = `<li>${course}</li>`;
    return newItem;
  });
  menu.innerHTML = elements.join("");
};
renderCourses(courses); */

// ⭐ Bài 148. Thực hành sử dụng DOM CSS:
// Các bạn hãy thay đổi màu nền của thẻ div có class là .red thành màu #f00 và màu chữ của thẻ p thành màu #f05123.

/* const styleElements = document.querySelector(".red");
console.log(styleElements);

Object.assign(styleElements.style, {
  backgroundColor: "#f00",
  borderRadius: "10px",
});

const color = document.querySelector(".blue");
console.log(color);

color.style.color = "#f05123"; */

// ⭐ Bài 152. Thực hành sử dụng ClassList #1:
// Các bạn hãy thực hiện các yêu cầu dưới đây:
/* Thêm class title vào thẻ h1
Thay thế class sub-title ở thẻ p bằng class content
Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, không được sử dụng thuộc tính className nhé. */

/* const headingEl = document.getElementById("heading");
console.log(headingEl);

headingEl.setAttribute("class", "heading-1234");
headingEl.className = "heading";
headingEl.classList.add("title");
headingEl.classList.toggle("title-12345");

const paragraph = document.querySelector(".sub-title");
paragraph.setAttribute("class", "content paragraph");
paragraph.className = "heading heading-1234";
 */

// ⭐ Bài 153. Thực hành sử dụng ClassList #2:
/*
Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.
Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử div, nhưng trước hết các bạn phải lấy được danh sách các phần tử div ra nhé.
Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, không được sử dụng thuộc tính className nhé.
*/

// const parent = document.querySelector(".bai153");

/* const listItem = parent.querySelectorAll("div");
listItem.forEach((element) => {
  element.classList.add("box");
}); */

/* const listItem = parent.getElementsByTagName("div");
for (let i = 0; i < listItem.length; i++) {
  const element = listItem[i];
  element.classList.add("box");
}
console.log(listItem); */

// ⭐ Bài 156. Thực hành sử dụng DOM Events:
// Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.

// const eventClick = document.querySelector(".btn-color");
// console.log(eventClick);

// eventClick.onclick = (event) => {
//   const target = event.target;
//   const currentTarget = event.currentTarget;

//   console.log(currentTarget);

//   eventClick.style.color = "blue";
// };

// const handleClick = (event) => {
//   const target = event.target;
//   const currentTarget = event.currentTarget;

//   console.log(currentTarget);

//   eventClick.style.color = "blue";
// };
// eventClick.addEventListener("click", handleClick);
