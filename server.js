const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let orders = [];

app.post("/order", (req, res) => {
  const order = req.body;

  orders.push(order);

  console.log("New Order Received:", order);

  res.send({ message: "Order placed successfully!" });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});