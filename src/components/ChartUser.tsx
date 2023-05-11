import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: "top" as const,
    // },
    // title: {
    //   display: true,
    //   text: "กราฟแสดงจำนวนการเพิ่มห้องน้ำในแต่ละวัน",
    // },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 1,
        // Include a dollar sign in the ticks
        // callback: function (value: any, index: any, ticks: any) {
        //   return value;
        // },
      },
    },
  },
};

//const labels = ["January", "February", "March", "April", "May", "June", "July"];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const dayOfMonth = new Date(currentYear, currentMonth, 0).getDate() + 1;

const labels = Array.from({ length: dayOfMonth }, (_, i) => i + 1);

// labels = [1, 2, 3, 4, 5, 6]
// data =   [2, 4, 0, 0, 0, 0]

const ChartUser = () => {
  const [data, setData] = useState<number[]>([]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "จำนวนการเพิ่มห้องน้ำ",
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: [5, 4, 7],
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  const getData = async () => {
    console.log("get data");

    try {
      const {
        data: { data },
      } = await axios.get("/dashboard/chart-post");

      let result = [];

      for (let i = 0; i < dayOfMonth; i++) {
        if (String(i) in data) {
          result.push(data[i]);
        } else {
          result.push(0);
        }
      }

      console.log("result: ", result);

      setData(result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pr-10 mt-5">
      <div className="text-xl font-bold">
        กราฟแสดงจำนวนการโพสต์ในแต่ละวัน ของเดือนพฤษภาคม
      </div>
      <Bar options={options} data={chartData} height={100} />
    </div>
  );
};

export default ChartUser;
