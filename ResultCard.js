import React from "react";
import "../styles/ResultCard.css";

function ResultCard({ data }) {

  if (!data) return null;

  return (

    <div className="result-card">

      <h3>Prediction Result</h3>

      <p><strong>Day:</strong> {data.day}</p>

      <p className="result-number">
        {data.predictedMeals} Meals
      </p>

    </div>

  );
}

export default ResultCard;