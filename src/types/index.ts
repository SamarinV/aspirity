export type TabsTypeValue = "mainInfo" | "vacation"

export type HistoryVacation = {
  type: "Отпуск" | "Отгул"
  startDate: string
  endDate: string
  countDay: number
}

export type User = {
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