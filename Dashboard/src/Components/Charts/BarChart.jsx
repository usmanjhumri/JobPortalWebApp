import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = ({ graphvalues }) => {
  console.log(graphvalues);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "APPLICATIONS PER JOBS",
      },
    },
  };
  const labels = graphvalues?.map((d) => d?.title);

  const data = {
    labels,
    datasets: [
      {
        label: "total applications per job",
        data: graphvalues?.map((d) => d?.applications),
        backgroundColor: "#277e28",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
BarChart.propTypes = {
  graphvalues: PropTypes.any,
};
