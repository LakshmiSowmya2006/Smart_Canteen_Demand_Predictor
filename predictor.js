function predictDemand(day, mealTime, weather, event) {

  let demand = 80;

  const dayWeights = {
    Monday: 10,
    Tuesday: 15,
    Wednesday: 20,
    Thursday: 25,
    Friday: 40,
    Saturday: 30,
    Sunday: -5
  };

  const mealWeights = {
    Breakfast: 25,
    Lunch: 60,
    Dinner: 40
  };

  const weatherWeights = {
    Sunny: 10,
    Rainy: 20,
    Cloudy: 15
  };

  demand += dayWeights[day] || 0;
  demand += mealWeights[mealTime] || 0;
  demand += weatherWeights[weather] || 0;

  if (event === "Yes") {
    demand += 50;
  }

  // AI-like randomness
  demand += Math.floor(Math.random() * 20);

  return {
    day: day,
    predictedMeals: demand
  };
}

module.exports = predictDemand;