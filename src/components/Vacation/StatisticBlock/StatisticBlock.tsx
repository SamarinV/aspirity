import Diagram from "../Diagram/Diagram"
import * as Tooltip from "@radix-ui/react-tooltip"
import { user } from "@/mockData/mockData"

const StatisticBlock = () => {
  return (
    <>
      <h5 className="text-h5 flex items-center">
        Статистика{" "}
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="p-1 border rounded-full flex items-center justify-center w-5 h-5 ml-2 cursor-default">
                <span className="text-[12px]">i</span>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5} side="right">
                <span className="text-subtitle2 py-1 px-2 bg-dark-bg-modal rounded-sm">1 раб. месяц = 3 дня отпуска</span>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </h5>
      <Diagram />
      <div className="text-subtitle1 mt-4">
        <div className="flex justify-between border rounded-full border-dark-border-primary py-3 px-2">
          <h4>
            <span className="text-dark-text-success">• </span>Доступно сейчас
          </h4>
          <h4>{user.vacation.statistics.available} дня</h4>
        </div>

        <div className="flex justify-between border rounded-full border-dark-border-primary py-3 px-2 mt-2">
          <h4>
            <span className="text-orange-400">• </span>Запланировано
          </h4>
          <h4>{user.vacation.statistics.planned} дней</h4>
        </div>

        <div className="flex justify-between border rounded-full border-dark-border-primary py-3 px-2 mt-2">
          <h4>
            <span className="text-dark-text-error">• </span>Использовано
          </h4>
          <h4>{user.vacation.statistics.used} дня</h4>
        </div>
      </div>
    </>
  )
}

export default StatisticBlock
