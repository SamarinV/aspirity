'use client'
import { Modal } from "@/components/Modal"
import { user } from "@/mockData/mockData"
import { HistoryVacation } from "@/types"
import { useState } from "react"


export const HistoryBlock = () => {
	const viewVacation = user.vacation.history.slice(0,5)
	const [isModalOpen, setModalOpen] = useState(false)


  const allVacation = user.vacation.history;

	const blockWithDays = (item: HistoryVacation) => {
		return (
      <div className="flex items-center">
        <span className="whitespace-nowrap">{item.startDate}</span>
        <span className="mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071C12.9024 18.3166 12.9024 17.6834 13.2929 17.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L13.2929 6.70711C12.9024 6.31658 12.9024 5.68342 13.2929 5.29289Z"
              fill={item.type === "Отпуск" ? "#FFB649" : "#DB4546"}
            />
          </svg>
        </span>
        <span className="whitespace-nowrap">{item.endDate}</span>
      </div>
    )
	}
  return (
    <div>
      <div className="flex justify-between items-center md:mb-4">
        <h5 className="text-h5 md:text-base">История отпусков</h5>
        <p
          onClick={() => setModalOpen(true)}
          className="text-subtitle2 text-dark-text-tertiary px-2 rounded-sm transition-all cursor-pointer hover:bg-dark-bg-modal"
        >
          Посмотреть все
        </p>
      </div>

      {/* decstop */}
      <div className="sm:hidden">
        <table className="min-w-full text-subtitle1">
          <thead>
            <tr className="text-dark-text-secondary">
              <th className="w-2/5 py-4 px-2 border-b-1 text-left">Тип</th>
              <th className="w-2/5 py-4 px-2 border-b-1 text-left">Даты отпуска</th>
              <th className="w-1/5 py-4 px-2 border-b-1 text-right">Количество дней</th>
            </tr>
          </thead>
          <tbody>
            {viewVacation.map((item, index) => (
              <tr key={index}>
                <td className="w-2/5 py-4 px-2 border-t border-dark-border-primary">{item.type}</td>
                <td className="w-2/5 py-4 px-2 border-t border-dark-border-primary">{blockWithDays(item)}</td>
                <td className="w-1/5 py-4 px-2 border-t border-dark-border-primary text-right">{item.countDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <div className="hidden sm:block">
        {viewVacation.map((item, index) => (
          <div key={index} className="border-t border-dark-border-primary py-4">
            <div className="text-dark-text-tertiary">Тип</div>
            <div className="text-subtitle1 mt-2">{item.type}</div>
            <div className="text-dark-text-tertiary mt-4">Даты отпуска</div>
            <div className="text-subtitle1 mt-2">{blockWithDays(item)}</div>
            <div className="text-dark-text-tertiary mt-4">Количество дней</div>
            <div className="text-subtitle1 mt-2">{item.countDay}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="max-h-[80vh] overflow-auto">
          <table className="min-w-full text-subtitle1">
            <thead>
              <tr className="text-dark-text-secondary">
                <th className="w-2/5 py-4 px-2 border-b-1 text-left">Тип</th>
                <th className="w-2/5 py-4 px-2 border-b-1 text-left">Даты отпуска</th>
                <th className="w-1/5 py-4 px-2 border-b-1 text-right">Количество дней</th>
              </tr>
            </thead>
            <tbody>
              {allVacation.map((item, index) => (
                <tr key={index}>
                  <td className="w-2/5 py-4 px-2 border-t border-dark-border-primary">{item.type}</td>
                  <td className="w-2/5 py-4 px-2 border-t border-dark-border-primary">{blockWithDays(item)}</td>
                  <td className="w-1/5 py-4 px-2 border-t border-dark-border-primary text-right">{item.countDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  )
}
