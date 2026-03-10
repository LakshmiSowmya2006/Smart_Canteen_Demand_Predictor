import React, { useState } from "react";
import "../styles/Form.css";

function PredictorForm({ setResult }) {

  const [day, setDay] = useState("Monday");
  const [mealTime, setMealTime] = useState("Lunch");
  const [weather, setWeather] = useState("Sunny");
  const [specialEvent, setSpecialEvent] = useState("No");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:5000/predict", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        day,
        mealTime,
        weather,
        event: specialEvent
      })
    });

    const data = await response.json();
    const history = JSON.parse(localStorage.getItem("predictionHistory")) || [];

history.push({
  day,
  mealTime,
  weather,
  event: specialEvent,
  predictedMeals: data.predictedMeals,
  time: new Date().toLocaleString()
});

localStorage.setItem("predictionHistory", JSON.stringify(history));


    setResult(data);
  };

  return (

    <div className="form-container">

      <h2>Predict Food Demand</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Day</label>
          <select value={day} onChange={(e)=>setDay(e.target.value)}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>

        <div className="form-group">
          <label>Meal Time</label>
          <select value={mealTime} onChange={(e)=>setMealTime(e.target.value)}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>

        <div className="form-group">
          <label>Weather</label>
          <select value={weather} onChange={(e)=>setWeather(e.target.value)}>
            <option>Sunny</option>
            <option>Rainy</option>
            <option>Cloudy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Special Event</label>
          <select value={specialEvent} onChange={(e)=>setSpecialEvent(e.target.value)}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <button className="predict-btn">
          Predict Demand
        </button>

      </form>

    </div>
  );
}

export default PredictorForm;