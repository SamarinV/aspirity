import { user } from "@/mockData/mockData"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export const Diagram = () => {
  const data = {
    datasets: [
      {
        label: "Статистика отпуска",
        data: [user.vacation.statistics.available, user.vacation.statistics.planned, user.vacation.statistics.used],
        backgroundColor: ["#2E7D32", "#FFA500", "#D32F2F"],
        borderColor: ["#2E7D32", "#FFA500", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  }
  const options = {
    cutout: "90%",
  }
  return (
    <div className="flex justify-center">
      <div className="w-40 h-40 relative">
        <Doughnut data={data} options={options} />
        <div className="flex items-center justify-center flex-col absolute top-0 w-full h-full">
          <h4 className="text-h4">{user.vacation.statistics.available}</h4>
          <span className="text-subtitle2 text-dark-text-tertiary">дня</span>
        </div>
      </div>
    </div>
  )
}
