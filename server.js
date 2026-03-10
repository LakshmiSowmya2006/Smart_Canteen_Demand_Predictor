const express = require("express");
const cors = require("cors");
const predictDemand = require("./predictor");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {

  const { day, mealTime, weather, event } = req.body;

  const prediction = predictDemand(day, mealTime, weather, event);

  res.json(prediction);

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});