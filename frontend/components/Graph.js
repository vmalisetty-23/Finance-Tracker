"use client";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

export default function Graph() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [myChartInstance, setMyChartInstance] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get-incomes")
      .then((response) => setIncomes(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
    .get("http://localhost:3000/get-expenses")
    .then(expenses => setExpenses(expenses.data))
    .catch(err => console.log(err))
  },[]);

  useEffect(() => {
    if (myChartInstance) {
      // If a previous chart exists, destroy it before creating a new one
      myChartInstance.destroy();
    }

    const totalIncome = incomes.reduce((acc, i) => acc + i.amount, 0);
    console.log(totalIncome);

    const totalExpense = expenses.reduce((acc, i) => acc + i.amount, 0);
    console.log(totalIncome);

    var ctx = document.getElementById("myChart").getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Income", "Expenses", "Investments"],
        datasets: [
          {
            data: [totalIncome, totalExpense, 0],
            borderColor: ["#50C878", "#e0115f","#0000FF"],
            backgroundColor: ["#50C878", "#e0115f","#0000FF"],
            borderWidth: 3,
          },
        ],
      },
    });

    setMyChartInstance(newChartInstance);
  }, [incomes]);

  return (
    <>
      <main className="graph">
        {/* Doughnut chart */}
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </main>
    </>
  );
}

