/*







*/

// ⭐⭐ Promise in JavaScript

// 🌻🌻 Khái niệm
// Promise là một thuật ngữ.
// Nó sinh ra để giải quyết các thao tác bất đồng bộ
// Trước khi có Promise các thao tác bất đồng bộ được giải quyết
// bằng callback nhưng callback có những nhược điểm như callback hell
// thì Promise sinh ra để giải quyết những nhược điểm của callback
// 🏅 "Nó cho phép bạn làm việc với các thao tác bất đồng bộ (asynchronous) một cách dễ dàng và tránh "callback hell"."🏅 Sinh ra từ phiên bản ES6

// 🌻🌻 Cách tạo ra một Promise
// const promise = new Promise((resolve, reject) => { }).then((data) => data).catch((error) => error);

// 3 trạng thái của Promise:
//  + Pending: // Khi logic của Promise đang được thực hiện
//  + Fulfilled: // Thành công
//  + Rejected: // Thất bại

/* const promise = new Promise(
  // this callback === Executor
  (resolve, reject) => {
    const a = 15;
    const b = 10;
    if (a < b) {
      const msg = "Thành công!!! 🌻";
      resolve(msg);
    } else {
      const errMsg = "Thất bại!!! 😡";
      reject(errMsg);
    }
  },
);

promise
  .then((res) => {
    console.log(res);
  }) // Khi thành công
  .catch((err) => {
    console.log(err);
  }) // Khi thất bại
  .finally(() => {
    console.log("Promise done!!! 😎");
  }); // Luôn được gọi khi done */

// 🌻🌻 Tính chất chuỗi (chain)

/* const promise1 = new Promise(
  // this callback === Executor
  (resolve, reject) => {
    const a = 5;
    const b = 10;
    if (a < b) {
      const msg = "Thành công!!! 🌻 ";
      resolve(msg);
    } else {
      const errMsg = "Thất bại!!! 😡";
      reject(errMsg);
    }
  },
); */

// 🟢 Nếu callback trong .then1 không return về cái gì thì then2 nhận được
// undefined (then2, then3 tương tự)
// 🟢 Nếu return về một giá trị không phải là một Promise thì then2 sẽ nhận được chính giá trị đó (then2, then3 tương tự)
// 🟢 Nếu return ra một Promise thì then2 (.catch) chờ Promise được giải quyết // (then2, then3 tương tự):
// + Nếu Promise resolve thì then2 nhận được kết quả resolve
// + Nếu Promise reject thi catch nhận kết quả của reject

/* promise1
  .then((res) => {
    console.log(res);
    return res + 200;
  }) // then1
  .then((res1) => {
    console.log(res1);
    return res1 + 200;
  }) // then2
  .then((res2) => {
    console.log(res2);
    const promise2 = new Promise((resolve, reject) => {
      resolve(`Đây là kết quả resolve: ${res2}`);
    });
    return promise2;
  }) // then3
  .then((res3) => {
    return console.log(res3);
  }) // then4
  .catch((err) => {
    console.log(err);
  }); */ // Khi thất bại

// 🔴 Ví dụ Promise (chain) với thao tác bất đồng bộ
/* const sleep = (ms) => {
  const fullName = "Nguyễn Hạ Trang 🐃💕🌻";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fullName);
    }, ms);
  });
}; */

/* sleep(3000)
  .then((res) => {
    console.log(res, "Hallo 3000");
    return sleep(1000);
  })
  .then((res1) => {
    console.log(res1, "Hallo 1000");
  }); */

// 🔴 Ví dụ về callback hell và cách giải quyết bằng Promise:

// Không sử dụng Promise dẫn đến tạo ra callback hell
/* const hell = (value, callback) => {
  callback(value);
};

hell(1, function (valueFromA) {
  hell(valueFromA + 2, function (valueFromB) {
    hell(valueFromB + 4, function (valueFromC) {
      hell(valueFromC + 6, function (valueFromD) {
        console.log(valueFromD + 8);
      });
    });
  });
}); */

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
/* const notHell = (value) => new Promise((resolve) => resolve(value));
notHell(1)
  .then((value) => value + 2)
  .then((value) => value + 4)
  .then((value) => value + 6)
  .then((value) => console.log(value + 8)); */

// 🔴 Ví dụ sử dụng Promise trong thực tiễn

const myFamily = [
  {
    id: 1,
    name: "Thu Trang",
  },
  {
    id: 2,
    name: "Hạ Trang",
  },
  {
    id: 3,
    name: "Xuân Bảo",
  },
  {
    id: 4,
    name: "Bố",
  },
  {
    id: 5,
    name: "Mẹ",
  },
];

const msg = [
  {
    id: 1,
    member_id: 1,
    content: "Hello, Chíp🌻🌻",
  },
  {
    id: 2,
    member_id: 2,
    content: "E chèo chị 💕💕",
  },
  {
    id: 3,
    member_id: 1,
    content: "🌻🌻🌻🌻",
  },
  {
    id: 4,
    member_id: 3,
    content: "A! Chị Cún 💕💕🌻🌻",
  },
  {
    id: 5,
    member_id: 3,
    content: "💕💕💕💕",
  },
  {
    id: 6,
    member_id: 2,
    content: "🌼🌼🌼🌼🌼🌼",
  },
];

const getComment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, 2000);
  });
};

const getMember = (ids) => {
  return new Promise((resolve, reject) => {
    const mem = myFamily.filter((item) => {
      return ids.includes(item.id);
    });
    resolve(mem);
  });
};

getComment()
  .then((comment) => {
    const memberIds = comment.map((item) => {
      const id = item.member_id;
      return id;
    });

    return getMember(memberIds).then((member) => {
      return {
        member: member,
        content: comment,
      };
    });
  })
  .then((data) => {
    let htmls = "";

    data.content.forEach((item, index) => {
      const cmt = item.content;
      const memIds = item.member_id;
      const memberName = data.member.find((element) => {
        return element.id === memIds;
      });

      htmls += `<li>${memberName.name}: ${cmt}</li>`;
    });
    const memberCmt = document.getElementById("memberCmt");

    memberCmt.innerHTML = htmls;
  });

// 🔴 JavaScript ES6 :
// Destructuring:
// Rest // Nhận về mảng phần tử
// Spread:
// Tagged Template literals:

const family2 = {
  cun: "Thu Trang",
  chip: "Hạ Trang",
  phao: "Xuân Pháo",
  bo: "Thanh Hoà",
};

const renderTemplate = ([first, ...rest], ...value) => {
  const member = document.querySelector("#member");
  console.log(value);
  const content = value
    .reduce(
      (acc, curr) => {
        return [...acc, `<span class="btn fs-1 btn-info">${curr}</span>`, rest.shift()];
      },
      [first],
    )
    .join("");
  member.innerHTML = content;
};

renderTemplate`Gia đình có ba chị em. Chị tôi là ${family2.cun}, tôi là ${family2.chip} và em trai tôi là ${family2.phao}, bố tôi là ${family2.bo}!`;
