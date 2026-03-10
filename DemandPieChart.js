import React from "react";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DemandPieChart({ history }) {

  if (!history || history.length === 0) {
    return <p style={{textAlign:"center"}}>No data available</p>;
  }

  const data = {
    labels: history.map(item => item.day),

    datasets: [
      {
        label: "Predicted Meals",

        data: history.map(item => item.predictedMeals),

        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
          "#14b8a6",
          "#f97316"
        ],

        borderWidth: 1
      }
    ]
  };

  return (

    <div style={{width:"400px", margin:"40px auto"}}>

      <h2 style={{textAlign:"center"}}>Demand Distribution</h2>

      <Pie data={data} />

    </div>

  );
}

export default DemandPieChart;