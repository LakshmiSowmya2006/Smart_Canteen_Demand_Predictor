import React from "react";
import "../styles/ResultCard.css";

function WeeklyPrediction({ data }) {

  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (

    <div className="result-card">

      <h2>Weekly Demand Forecast</h2>

      <table>

        <thead>
          <tr>
            <th>Day</th>
            <th>Predicted Meals</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item, index) => (

            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.predictedMeals}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default WeeklyPrediction;