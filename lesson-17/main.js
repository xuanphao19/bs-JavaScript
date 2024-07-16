/*

*/
//⭐ CallBack in JavaScript ⭐⭐

// CallBack Là hàm được truyền qua đối số khi gọi hàm khác và được gọi lại ngay trong chính hàm đấy
/*
1: Là hàm
2: Truyền qua đối số
3: Được gọi lại (trong hàm nhận đối số)
*/

const myFunction = (callback) => {
  const myName = "Nguyễn Hạ Trang";
  callback(myName);
};

const myCallback = (str) => {
  // console.log(str);
};

myFunction(myCallback);

//⭐⭐ Callback trong phương thức map()

const myFamily = ["Thu Trang", "Hạ Trang", "Xuân Bảo"];

Array.prototype.myMap = function (callback) {
  const arr = [];
  const arrLength = this.length;

  for (let i = 0; i < arrLength; i++) {
    const element = callback(this[i], i, this);
    arr.push(element);
  }

  return arr;
};

const resultMyMap = myFamily.myMap((member, i) => {
  return ` Nguyễn ${member}`;
});
// console.log(resultMyMap);

const favourite = [
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

const result101 = favourite.myMap((item) => {
  return { name: `Mon ${item.name} 🌻` };
});

// console.log(result101);

//⭐⭐ Callback trong phương thức filter()

const myFamily2 = [
  {
    name: "Thu Trang",
    age: 23,
  },
  {
    name: "Ha Trang",
    age: 15,
  },
  {
    name: "Xuan Bao",
    age: 6,
  },
  {
    name: "Ly Mama",
    age: 50,
    bio: "her💔forTheViolet",
  },
];

Array.prototype.myFilter = function (callback) {
  const arr = [];

  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      const element = callback(this[index], index, this);
      if (element) {
        arr.push(this[index]);
      }
    }
  }

  return arr;
};

const resultMyFilter = myFamily2.myFilter((member) => {
  return member.age > 5;
});

console.log(resultMyFilter);

//⭐⭐ Callback trong phương thức find()

Array.prototype.myFind = function (callback) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = callback(this[index], index, this);
      if (element) return [this[index]];
    }
  }

  return undefined;
};

const callbackFind = (element) => {
  return element.age > 6;
};

const resultFind = myFamily2.myFind(callbackFind);
console.log(resultFind);

//⭐⭐ Callback trong phương thức some()

Array.prototype.mySome = function (callback) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = callback(this[index], index, this);
      if (element) {
        return true;
      }
    }
  }

  return false;
};

const resultMySome = myFamily2.mySome((members) => {
  return members.age === 15;
});

console.log(resultMySome);

//⭐⭐ Callback trong phương thức every()

Array.prototype.myEvery = function (callback) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = callback(this[index], index, this);
      if (!element) {
        return false;
      }
    }
  }

  return true;
};

const resultMyEvery = myFamily2.myEvery((member) => {
  return member.age === 15;
});

console.log(resultMyEvery);
