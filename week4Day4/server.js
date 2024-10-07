const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/products", (req, res) => {
  const products = [
    { product: "Egg", price: 250 },
    { product: "Spaghetti", price: 220 },
    { product: "Garri", age: 280 },
  ];
  res.render("products", { products });
});

app.listen(3003, () => {
  console.log('Server running on http://localhost:3000');
  });
  