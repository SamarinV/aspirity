import { Dispatch, SetStateAction } from "react"
import HistoryBlock from "./HistoryBlock/HistoryBlock"
import StatisticBlock from "./StatisticBlock/StatisticBlock"

const Vacation = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 gap-4 lg:flex lg:flex-col">
      <section className="col-span-2 bg-dark-bg-secondary p-10 rounded-2xl lg:p-4">
        <StatisticBlock />
      </section>

      <section className="col-span-4 bg-dark-bg-secondary p-10 rounded-2xl md:p-4">
        <HistoryBlock />
      </section>
    </div>
  )
}

export default Vacation
