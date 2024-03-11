import { Box } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const CourseChart = ({ courses }) => {
  Chart.register(CategoryScale);
  console.log("courses", courses);

  const chartData = useMemo(() => {
    const labels = courses.map((course) => course.course_name);
    const durations = courses.map((course) => parseInt(course.duration));

    return {
      labels: labels,
      datasets: [
        {
          label: "Duration (months)",
          backgroundColor: "green.100",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75,192,192,0.4)",
          hoverBorderColor: "rgba(75,192,192,1)",
          data: durations
        }
      ]
    };
  }, [courses]);

  return (
    <Box>
      <h2>Course Durations</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Duration (months)"
              }
            },
            x: {
              title: {
                display: true,
                text: "Course Name"
              }
            }
          }
        }}
      />
    </Box>
  );
};

export default CourseChart;
