/*





*/
// 🟢🟢  DOM events in JavaScript ⭐⭐

// DOM events là gì?
/*
DOM events (Document Object Model events) là các sự kiện xảy ra trong tài liệu web, và chúng cho phép JavaScript tương tác với HTML. DOM events có thể được kích hoạt bởi người dùng hoặc bởi trình duyệt, và chúng cung cấp một cách để làm cho các trang web trở nên động và tương tác hơn.

Dưới đây là một số DOM events phổ biến:

1. **Mouse Events**:
    - `click`: Xảy ra khi người dùng nhấn và thả nút chuột.
    - `dblclick`: Xảy ra khi người dùng nhấp đúp vào một phần tử.
    - `mousedown`: Xảy ra khi người dùng nhấn nút chuột.
    - `mouseup`: Xảy ra khi người dùng thả nút chuột.
    - `mousemove`: Xảy ra khi người dùng di chuyển chuột qua một phần tử.
    - `mouseover`: Xảy ra khi con trỏ chuột di chuyển vào một phần tử.

2. **Keyboard Events**:
    - `keydown`: Xảy ra khi người dùng nhấn một phím.
    - `keyup`: Xảy ra khi người dùng thả một phím.
    - `keypress`: Xảy ra khi người dùng nhấn một phím (không còn được khuyến nghị sử dụng, nên dùng `keydown` hoặc `keyup` thay thế).

3. **Form Events**:
    - `submit`: Xảy ra khi người dùng gửi một form.
    - `reset`: Xảy ra khi người dùng đặt lại một form.
    - `focus`: Xảy ra khi một phần tử nhận được focus.
    - `blur`: Xảy ra khi một phần tử mất focus.
    - `change`: Xảy ra khi giá trị của một phần tử form thay đổi.

4. **Window Events**:
    - `load`: Xảy ra khi toàn bộ trang và tất cả các tài nguyên của nó (như hình ảnh, script) đã tải xong.
    - `unload`: Xảy ra khi người dùng rời khỏi trang.
    - `resize`: Xảy ra khi kích thước cửa sổ trình duyệt thay đổi.
    - `scroll`: Xảy ra khi người dùng cuộn trang.

Để xử lý các DOM events, bạn có thể sử dụng các trình xử lý sự kiện (event handlers). Ví dụ:

```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

Trong ví dụ trên, khi người dùng nhấp vào nút với id `myButton`, một cảnh báo sẽ hiện lên với thông báo "Button clicked!".
*/
//⭐ Attr Event : Viết Event trực tiếp vào thẻ mở của thẻ HTML
// Ví du: <h1 "tên sự kiện (Bắt đầu bằng on...)" = "function (Thực hiện hành động nào đó)">Attr Event</h1>

//⭐ Add event ElementNode:
// ElementNode gọi đến phương thức addEventListener (
// Đối số thứ nhất: Tên sự kiện.
// Đối số thứ hai: function
//)

// elementNode.onclick = function () {};
// Không linh hoạt

// elementNode.addEventListener("click", (event) => {
//   event.target;
//   console.log(event.target);
// });
