const data = "src/data.json";
const listFruits = document.querySelector("#fruitList");
const tableBody = document.querySelector("#tableBody");
const calculateStockBtn = document.getElementById("calculate-stock");
const getFruitList = () => {
  fetch(data)
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      console.log(resJson.fruitsData);
      fruitList(resJson.fruitsData);
      calculateStock(resJson.fruitsData);
    })
    .catch((error) => {
      console.error(error);
    });
};

const fruitList = (fruit) => {
  fruit.forEach((item) => {
    tableBody.innerHTML += `
        <td>${item.fruitName}</td>
        <td>${item.fruitType}</td>
        <td>${item.stock}</td>
        `;
  });
};
const calculateStock = (fruit) => {
  const stock = fruit.reduce((acc, total) => (acc += total.stock), 0);

  const stockT = document.createElement("div");
  stockT.innerHTML = `<p>Total Stock: <strong>${stock}</strong></h3>`;
  listFruits.appendChild(stockT);
};

document.addEventListener("DOMContentLoaded", getFruitList);
// calculateStockBtn.addEventListener("click", calculateStock);
