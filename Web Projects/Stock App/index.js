let prevPrice = null;

setInterval(updateStock, 1500);

function updateStock() {
  const stockData = getStockData();
  renderStockData(stockData);
}

function renderStockData({ name, symbol, price, time }) {
  document.getElementById("name").innerText = name;
  document.getElementById("symbol").innerText = symbol;
  document.getElementById("price").innerText = price.toFixed(2);
  document.getElementById("time").innerText = time;

  const icon = document.getElementById("price-icon");

  if (prevPrice !== null) {
    icon.src =
      price > prevPrice
        ? "green.png"
        : price < prevPrice
        ? "red.png"
        : "grey.png";
  }

  prevPrice = price;
}

function getStockData() {
  return {
    name: "QtechAI",
    symbol: "QTA",
    price: +(Math.random() * (3)).toFixed(2),
    time: new Date().toLocaleTimeString()
  };
}