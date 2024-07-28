/*








*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let products = null;

fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;

    showDetails();
  });

const showDetails = () => {
  const detail = $(".detail");

  const productId = new URLSearchParams(window.location.search).get("id");

  const thisProduct = products.filter((item) => {
    return item.id === Number(productId);
  })[0];

  if (!thisProduct) {
    window.location.href = "./";
  }

  detail.querySelector(".image img").src = thisProduct.image;

  $(".name").innerText = thisProduct.name;
  $(".age").innerText = thisProduct.age;

  const listProducts = $(".list-product");

  const listItem = products.filter((item) => item.id !== Number(productId));

  listItem.forEach((item) => {
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
