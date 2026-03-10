import React, { useEffect, useState } from "react";

function Predictions() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const savedHistory = JSON.parse(localStorage.getItem("predictionHistory")) || [];

    setHistory(savedHistory);

  }, []);

  return (

    <div style={{padding:"40px"}}>

      <h2>Prediction History</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Meal</th>
            <th>Weather</th>
            <th>Event</th>
            <th>Predicted Meals</th>
          </tr>
        </thead>

        <tbody>

          {history.map((item, index) => (

            <tr key={index}>

              <td>{item.time}</td>
              <td>{item.day}</td>
              <td>{item.mealTime}</td>
              <td>{item.weather}</td>
              <td>{item.event}</td>
              <td>{item.predictedMeals}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default Predictions;