import { Dispatch, SetStateAction } from "react"
import HistoryBlock from "./HistoryBlock/HistoryBlock"
import StatisticBlock from "./StatisticBlock/StatisticBlock"

const Vacation = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 gap-4">
      <section className="col-span-2 bg-dark-bg-secondary p-10">
        <StatisticBlock />
      </section>

      <section className="col-span-4 bg-dark-bg-secondary p-10">
        <HistoryBlock />
      </section>
    </div>
  )
}

export default Vacation
