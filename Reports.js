import React, { useEffect, useState } from "react";
import DemandPieChart from "../components/DemandPieChart";

function Reports() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const savedHistory = JSON.parse(localStorage.getItem("predictionHistory")) || [];

    setHistory(savedHistory);

  }, []);

  return (

    <div style={{padding:"40px"}}>

      <h2 style={{textAlign:"center"}}>Prediction Reports</h2>

      <DemandPieChart history={history} />

    </div>

  );
}

export default Reports;