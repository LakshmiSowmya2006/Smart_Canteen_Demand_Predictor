import React, { useState } from "react";
import PredictorForm from "../components/PredictorForm";
import ResultCard from "../components/ResultCard";

function Dashboard() {

  const [result, setResult] = useState(null);

  return (

    <div className="dashboard">

      <PredictorForm setResult={setResult} />

      <ResultCard data={result} />

    </div>

  );
}

export default Dashboard;