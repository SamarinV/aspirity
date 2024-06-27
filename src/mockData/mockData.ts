export type HistoryVacation = {
  type: "Отпуск" | "Отгул"
  startDate: string
  endDate: string
  countDay: number
}

type User = {
  surname: string
  name: string
  patronymic: string
  profession: string
  visitingTime: string
  imageUrl: string
  location: {
    country: string
    city: string
  }
  vacation: {
    statistics: {
      available: number
      planned: number
      used: number
    }
    history: HistoryVacation[]
  }
}

export const user : User = {
  surname: "Иванов",
  name: "Иван",
  patronymic: "Иванович",
  profession: "Junior UI/UX designer",
  visitingTime: "14:03",
  imageUrl: "",
  location: {
    country: "Россия",
    city: "Красноярск",
  },
  vacation: {
    statistics: {
      available: 32,
      planned: 8,
			used: 4
    },
    history: [
      { type: "Отпуск", startDate: "03 марта 2023", endDate: "23 марта 2023", countDay: 20 },
      { type: "Отгул", startDate: "03 марта 2023", endDate: "7 марта 2023", countDay: 4 },
      { type: "Отгул", startDate: "03 марта 2023", endDate: "7 марта 2023", countDay: 4 },
      { type: "Отгул", startDate: "03 марта 2023", endDate: "7 марта 2023", countDay: 4 },
      { type: "Отгул", startDate: "03 марта 2023", endDate: "7 марта 2023", countDay: 4 },
    ],
  },
}