/*








*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let products = null;

fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;

    addHTML();
  });

const listProducts = $(".list-product");

const addHTML = () => {
  products.forEach((item) => {
    let newItem = document.createElement("a");

    newItem.href = "./detail.html?id=" + item.id;
    newItem.classList.add("item");
    newItem.innerHTML = `
    <img src="${item.image}" />
    <h2>${item.name}</h2>
    <div class="age">${item.age}</div>
    `;

    listProducts.appendChild(newItem);
  });
};
