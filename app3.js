// Created By Yarden Halely & Nave Shitrit
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const products = require("./data/products");
app.get("/products/:productPrice", function (req, res) {
  // Request from the user
  const productPrice = parseInt(req.params.productPrice);
  //
  const filteredPrices = products.filter((p) => p.price > productPrice);
  console.log(filteredPrices);
  if (filteredPrices) {
    res.json(filteredPrices);
  } else {
    res.status(404).json({
      "User Not Found": `The User's Id #${usersPrice} Doesnt Exist`,
    });
  }
});
app.listen(port, () => {
  console.log(`Users API listening on port ${port}`);
});
