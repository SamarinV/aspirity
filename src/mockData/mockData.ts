import { User } from "@/types";

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