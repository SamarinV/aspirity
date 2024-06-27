import { user } from "@/mockData/mockData"
import iconArrow from "@/assets/arrow-history-right.svg"

const HistoryBlock = () => {
  return (
    <>
      <div className="flex justify-between">
        <h5 className="text-h5">История отпусков</h5>
        <p className="text-subtitle2 text-dark-text-tertiary cursor-pointer">Посмотреть все</p>
      </div>
      <div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="w-2/5 py-4 px-2 border-b-1 text-left text-subtitle1 text-dark-text-secondary">Тип</th>
              <th className="w-2/5 py-4 px-2 border-b-1 text-left text-subtitle1 text-dark-text-secondary">
                Даты отпуска
              </th>
              <th className="w-1/5 py-4 px-2 border-b-1 text-right text-subtitle1 text-dark-text-secondary">
                Количество дней
              </th>
            </tr>
          </thead>
          <tbody>
            {user.vacation.history.map((item, index) => (
              <tr key={index}>
                <td className="w-2/5 text-subtitle1 py-4 px-2 border-t border-dark-border-primary">{item.type}</td>
                <td className="w-2/5 text-subtitle1 py-4 px-2 border-t border-dark-border-primary">
                  <div className="flex items-center">
                    <span className="text-nowrap">{item.startDate}</span>
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
                    <span className="text-nowrap"> {item.endDate}</span>
                  </div>
                </td>
                <td className="w-1/5 text-subtitle1 py-4 px-2 border-t border-dark-border-primary text-right">
                  {item.countDay}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HistoryBlock
