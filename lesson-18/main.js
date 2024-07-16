// // document.write("Xin Chào Hạ Trang");

// // ⭐⭐ Kiến thức cơ bản về DOM HTML: ⭐⭐

//⭐ DOM HTML là gì?
// DOM là viết tắt của Document Object Model: Mô hình Đối tượng Tài liệu
// HTML DOM là một chuẩn lập trình được định nghĩa bởi W3C, cho phép các lập trình viên truy cập và thao tác với nội dung, cấu trúc và phong cách của các tài liệu.

//⭐ Các Thành phần DOM HTML? Gồm Những thành phần nào?
// Các thành phần của DOM HTML:
// + Element
// + Attribute
// + Text

//⭐ DOM element Node: Là một thẻ tag được viết trong HTML

//⭐ DOM attribute Node: Là những thuộc tính nằm ở trong các thẻ mở

//⭐ DOM text Node: Là những nội dung giữa thẻ mở và đóng trong HTML

//💔// ⭐⭐ Làm việc với DOM element Node ⭐⭐

// // ⭐ Lấy element DOM thông qua 🟢 document:

// 1. ID: getElementById("id") //🔑 DOM Element Node.
// 2. const classA = document.getElementsByClassName("container"); //👉 HTMLCollection.
// 3. tag name: getElementsByTagName("tagName") //👉 HTMLCollection.

// 4. CSS selector:
//            + querySelector("selector")    //🔑 DOM Element Node.
//            + querySelectorAll("selector") //👉 NodeList of elements

// 5. HTML collection: select theo đặc tính phân loại html element
//            + Ví dụ: parentElement.links   //👉 HTMLCollection.
//            + Ví dụ: parentElement.forms  //👉 HTMLCollection.
//            + Ví dụ: parentElement.anchor //👉 HTMLCollection.

// console.log(document.querySelectorAll(".container")); // NodeList

// // ⭐ Lấy qua ID
// const byId = document.getElementById("heading");
// console.log(byId); // nhận được Element Node thẻ h2 có id là heading

// // ⭐ Lấy qua class name
// const byClass = document.getElementsByClassName("heading");
// console.log(byClass);
// Trường hợp một thẻ một class nhận được HTMLCollection dạng array với 1 phần tử là thẻ có class được gọi đến
// Trường hợp nhiều thẻ một class nhận được HTMLCollection dạng array với các phần tử là thẻ có class được gọi đến

// // ⭐ Lấy qua tag name
// const byTag = document.getElementsByTagName("h2");
// console.log(byTag);
// Trường hợp có một thẻ: nhận được HTMLCollection dạng array với 1 phần tử là thẻ được gọi đến
// Trường hợp có nhiều thẻ: nhận được HTMLCollection dạng array với các phần tử là thẻ được gọi đến

// // ⭐ Lấy qua CSS selector
// const selector = document.querySelector(".box .heading");
// console.log(selector);
// Trả về ElementNode: một thẻ có class là heading và là con của thẻ có class là box

// const selectorAll = document.querySelectorAll(".box .heading");
// console.log(selectorAll);
// Nhận được một NodeList là các thẻ có class là heading và là con của thẻ có class là box
// // Trả về tất cả các element có selector .box .heading

// const firstChild = document.querySelector(".box .heading:first-child");
// console.log(firstChild);
// Nhận được ElementNode
// // Lấy ra thẻ có class là heading là đứa con đầu tiên của thẻ có class là box

// const nthChild = document.querySelector(".box .heading:nth-child(2)");
// console.log(nthChild);
// Nhận được ElementNode: lấy ra thẻ có class là heading là đứa con thứ 2 của thẻ có class là box

// // ⭐ Lấy element DOM thông qua 🟢 parentElement:
// const parent = document.querySelector(".box");
// console.log(parent.getElementsByTagName("h2"));
// Nhận được HTMLCollection dạng array

//💔// ⭐⭐ Làm việc với DOM Attribute Node ⭐⭐

// // ⭐ Lấy ra một attribute
const headingElement = document.querySelector("h2");
// console.log(headingElement);
// Nhận được ElementNode: thẻ h2

// headingElement.getAttribute("class", "heading");
// Nhận được tên class của thẻ h2

// // ⭐ Thêm attribute

// headingElement.title = "Heading";
// Thẻ h2 được thêm thuộc tính title, chỉ thấy khi inspect
// // headingElement.className = "Heading";
// Thẻ h2 được thêm thuộc tính class, chỉ thấy khi inspect
// headingElement.setAttribute("class", "heading");
// Thẻ h2 được thêm thuộc tính class, chỉ thấy khi inspect

//💔// ⭐⭐ Làm việc với DOM Text Node ⭐⭐

// // ⭐ InnerText vs textContent Property
// Không nhận ElementNode làm văn bản

const headingElement1 = document.querySelector("h2");
// console.log(headingElement1);
// Trả về ElementNode

// ⭐ InnerText:
// Là thuộc tính của ElementNode

// Lấy nội dung text của ElementNode
// const innerText1 = headingElement1.innerText; // (getter)
// console.log(innerText1);
// Nhận được nội dung có trong ElementNode

// Sửa nội dung text của ElementNode
// headingElement1.innerText = "Hello 🌻"; // (setter)
// Nội dung hiển thị trên trang web bị thay đổi

// Nội dung lấy được giống với nội dung hiển thị trên trang web

// ⭐ TextContent:
// Là thuộc tính của cả ElementNode và TextNode

// Lấy nội dung text của ElementNode
// const textContent1 = headingElement1.textContent; // (getter)
// console.log(textContent1);
// Nhận được nội dung có trong ElementNode

// Sửa nội dung text của ElementNode
// headingElement1.textContent = "Xin Chào 🌼"; // (setter)
// Nội dung hiển thị trên trang web bị thay đổi

// Lấy ra tất cả TextNode nằm trong ElementNode

//🔴// ⭐⭐ Làm việc với DOM element Node Details ⭐⭐

// Get ElementNode
// const boxEl = document.querySelector(".box");

// console.log(boxEl);

//⭐ InnerHTML:
// Thêm element vào element có sẵn

// boxEl.innerHTML = "<h2 class='thuTrang'>Hallo🌺🌼🌻🍀</h2>"; // (setter)
// Setter: Ghi đè contents
// const getter = boxEl.innerHTML; // (getter)
// console.log(getter);
// Getter toàn bộ ElementNode là con của boxEl

//⭐ OuterHTML:
// Getter: ElementNode gọi đến thuộc tính outerHTML
// Setter: Ghi đè chính ElementNode gọi đến thuộc tính outerHTML

// boxEl.outerHTML = "<h3>🌼🌻🍀🌺☘🌳🥦</h3> ";

// // ⭐ DOM CSS ⭐
//🔴// ⭐⭐ Làm việc với DOM Attribute Node Details ⭐⭐

// // ⭐ Thuộc tính style
// Là một thuộc tính của ElementNode, chỉ truy cập được khi đã lấy ra ElementNode

// const boxElement = document.querySelector(".box");
// Các thuộc tính CSS của Obj style:
// console.log(boxElement.style);

// Cách 1: Setter lẻ thuộc tính CSS
/* boxElement.style.width = "200px";
boxElement.style.height = "300px";
boxElement.style.backgroundColor = "orange"; */

// Cách 2: Setter bằng phương thức assign Obj
/* Object.assign(boxElement.style, {
  width: "200px",
  height: "200px",
  backgroundColor: "blue",
});
 */

// console.log(boxElement.style.width);
// Getter CSS property in obj style

// //⭐ Thuộc tính ClassList ⭐
// Là một thuộc tính của ElementNode, chỉ truy cập được khi đã lấy ra ElementNode

// const box1 = document.querySelector(".box"); // (ElementNode===box1)

//⭐ Trả về một đối tượng là DOMTokenList dạng array

// const classListBox1 = box1.classList;
// console.log(classListBox1);

//⭐ Thuộc tính:
// length trả về độ dài của ElementNode
// value trả về chuỗi các className

// const length = box1.classList.length;
// const value = box1.classList.value;
// console.log(length, value);

//⭐ Phương thức: 5 phương thức phổ biến:

// 1: add(): thêm một hoặc nhiều className vào ElementNode (cách nhau dấu phẩy)

// box1.classList.add("box-2", "box-3");
// console.log(box1);

// 2: contains(): kiểm tra class is the exist

// const isExist = box1.classList.contains("box-1");
// console.log(isExist); // boolean

// 3: remove(): xóa một hoặc nhiều className khỏi ElementNode (cách nhau dấu phẩy)
// box1.classList.remove("box-1");
// console.log(box1);

// 4: toggle(): chuyển đổi className vào ElementNode DOM events

const heading = document.querySelector(".heading");
const box = document.querySelector(".box");

const changeColor = () => {
  heading.classList.toggle("blue");
  box.classList.toggle("red");
};

setInterval(() => {
  changeColor();
}, 200);
