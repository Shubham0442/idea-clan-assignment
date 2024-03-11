import { Box } from "@chakra-ui/react";
import { CategoryScale } from "chart.js";
import React, { useMemo } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ContentChart = ({ contents }) => {
  Chart.register(CategoryScale);

  const data = useMemo(() => {
    const data = {
      labels: [
        "Core Java Programming",
        "HTML Fundamentals",
        "JavaScript Fundamentals"
      ],
      datasets: [
        {
          label: "Number of Lectures",
          backgroundColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          data: [1, 2, 1]
        }
      ]
    };

    return data;
  }, [contents]);

  return (
    <Box>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Number of Lectures per Course",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "right"
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 1
                }
              }
            ]
          }
        }}
      />
    </Box>
  );
};

export default ContentChart;
